import { FC } from "react";
import { DeckTypeData } from "../../elements/DeckType/DeckTypeData";
import { DeckTypeItem } from "../../elements/DeckType/DeckTypeItem";
import { Link } from "react-router-dom";

const NewDeckForm: FC = () => {
  return (
      <div>
          <h2>Novo Deck de Estudos</h2>
          <h3>Primeiro, selecione o tipo do deck a ser criado</h3>
          <div>
              {DeckTypeData.map((item: DeckTypeItem, index: number) => (
                  <Link to={item.path} key={index}>
                      <div>
                          <h4>
                              <p>{item.icon}</p>
                              <p>{item.title}</p>
                          </h4>
                          <div>{item.description}</div>
                      </div>
                  </Link>
              ))}
          </div>
      </div>
  );
};

export default NewDeckForm;