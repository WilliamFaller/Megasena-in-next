export default function display(props) {
    const estilo = {display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    width: "80px",
    borderRadius: "40px",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "2rem",
    margin: "20px"}
    return(
        <div style={estilo}>
            {props.num}
        </div>
    )
}