import "./TemperatureConverter.css";

function TemperatureConverter({ temperature }) {
    return (
        <div className="Message">
            <h2 className="Message__header">Температурный конвертер:</h2>
            <p className="Message__text">Градусов Цельсия: {temperature}</p>
            <p className="Message__text">Градусов Фаренгейта: {+temperature * 1.8 + 32}</p>
        </div>
    );
}

export default TemperatureConverter;
