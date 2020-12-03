import {useState} from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import react from 'react'

export default function Contato() {
    const [ form, setForm ] = useState({
        nome: "",
        mensagem: ""
    });

    const controleMudanca = (evento) => {
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();

        const json = JSON.stringify(form);

        const opcoes = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', "Acess-Control-Allow-Origin": "*" },
            body: json
        }

        const resposta = await  fetch("http://localhost/projetogit/php/api/cadastro_produtos.php",
        opcoes);
        const dados = await resposta.json()
    }

    return (
        <Row>
            <Container className="row row-cols-2 mx-auto mt-2" align="center">
                <div className="col">
                    <img src="https://i.imgur.com/xHGL3uf.png" width="40px" />
                    <div>contato@fullstackeletro.com</div>
                </div>
                <div className="col">
                    <img src="https://i.imgur.com/O8UUffk.png" width="40px" />
                    <div>(21) 2222-2222</div>
                </div>
            </Container>
            <div className="col-lg-6 col-md-6 mx-auto mt-5">
                <Form onSubmit={controleEnvio}>
                    <h4>Fale Conosco</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensagem:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="mensagem" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
            </Button>
                </Form>
            </div>
        </Row>
    )
}