import './ValueViewer.css';

type Props = {
  value: any;
};

export const ValueViewer: React.FC<Props> = ({ value }) => {
  return <pre className="value-viewer">{JSON.stringify(value, null, 2)}</pre>;
};
