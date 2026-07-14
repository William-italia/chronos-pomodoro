import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { ButtonMenu } from '../../components/ButtonMenu';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const storageTheme = localStorage.getItem('theme') as
      | 'dark'
      | 'light'
      | null;

    return storageTheme ?? 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange() {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Container>
      <Header>
        <Logo />

        <Menu>
          <ButtonMenu href='#' aria-label='Ir para a home' title='home'>
            <HouseIcon />
          </ButtonMenu>
          <ButtonMenu
            href='#'
            aria-label='Ir para o histórico'
            title='histórico'
          >
            <HistoryIcon /> {/* /history/ */}
          </ButtonMenu>
          <ButtonMenu
            href='#'
            aria-label='Ir para configurações'
            title='configurações'
          >
            <SettingsIcon /> {/* /settings/ */}
          </ButtonMenu>
          <ButtonMenu
            as='button'
            aria-label='Mudar tema'
            title='tema'
            onClick={handleThemeChange}
          >
            {nextThemeIcon[theme]}
          </ButtonMenu>
        </Menu>

        <>{children}</>
      </Header>

      <Footer />
    </Container>
  );
}
