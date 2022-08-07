const Events = () => {

    const handleMyEvent = (e) => {

    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        }else {
            return <h1>Tembem posso renderizar isso!</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique Aqui Também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

};

export default Events;