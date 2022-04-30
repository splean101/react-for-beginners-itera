type PProps = {
    name: string;
}
export const P: React.FC<PProps> = (props) => (
    <p>My name is {props.name}</p>
)