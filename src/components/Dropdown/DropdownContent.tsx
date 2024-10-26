type TDropdownContetnProps = {
  iconSrc: string;
  alt: string;
  content: string;
  handler: () => void;
};

export default function DropdownContent(props: TDropdownContetnProps) {
  return (
    <li
      className="flex gap-2 cursor-pointer hover:scale-110"
      onClick={props.handler}
      key={props.alt}
    >
      <img src={props.iconSrc} alt={props.alt} />
      <span>{props.content}</span>
    </li>
  );
}
