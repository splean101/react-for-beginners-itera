type PProps = {
    name: string;
    biography: string;
    contacts: string;
}
export const P: React.FC<PProps> = (props) => (
    <div>
        <p>My name is <u>{props.name}</u> </p>
        <p><b>My short biograpy</b> {props.biography}</p>
        <p><u><i>My contacts - </i></u> {props.contacts}</p>
    </div>
)