//Tudo dentro de {} é uma template expressions que vai rodar expressões em JS

const TemplateExpressions = () => {
    const name = "Leozin";
    const data = {
        age: 24,
        job: "Programmer"
    };
    
    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você trabalha como: {data.job}</p>
        </div>
    );
};

export default TemplateExpressions;