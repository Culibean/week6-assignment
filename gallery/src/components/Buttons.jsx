export default function Buttons({ onNext, onPrev }) {
  return (
    <div className="buttons">
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
