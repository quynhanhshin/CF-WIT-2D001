import '../css/Info.css'

export default function Info(props){
    console.log(props);

    const {name, phone, age} = props;
    return (<div className='title'>
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
        <p>Phone: {props.phone} </p>
    </div>
    );
}