import { DeckAnkiForm } from "../components/forms/DeckAnkiForm";

const NewDeckPage =() => {

  return (
    <DeckAnkiForm title="" description="" directory={0} isPublic={false} isCloneable={false} />
  );
};

export default NewDeckPage;