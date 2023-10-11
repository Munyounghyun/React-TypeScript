import { Title } from "../components";

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p>normal text</p>
        <p className="hidden">display: none text</p>
        <p className="invisible text-left">visibility: hidden text</p>
      </div>
    </section>
  );
}
