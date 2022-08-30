import { useFetch } from "../hooks/useFetch";
import "./Footer.css";

const Footer = () => {
    
    const url = "http://localhost:3000/company/1";

    const { data: empresa, loading, error } = useFetch(url);


    return (
        <footer>
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>...</p>}
            {empresa && <p>{empresa.name} - Todos os Direitos Reservados</p> }
        </footer>
    )
}

export default Footer
