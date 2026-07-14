export type CycleInfoProps = {
  action: 'foque' | 'descanse';
  duration: number;
};

export function CycleInfo({ action, duration }: CycleInfoProps) {
  return (
    <div>
      <span>
        Nesse ciclo <strong>{action}</strong> por
        <strong> {duration} Min</strong>.
      </span>
    </div>
  );
}
