import { FC } from "react";
import { DeckTypeData } from "./data";
import { Link } from "react-router-dom";
import { DeckTypeItem } from "./interface";

const NewDeckForm: FC = () => {
  return (
      <div>
          <h2>Novo Deck de Estudos</h2>
          <h3>Primeiro, selecione o tipo do deck a ser criado</h3>
          <div className="d-flex card-teachfy">
              {DeckTypeData.map((item: DeckTypeItem, index: number) => (
                  <Link to={item.path} key={index} style={{  }}>
                    <div className="card text-center m-3">
                        <div className="card-body">
                            <h4 className="card-title">
                                <p>{item.icon}</p>
                                <p>{item.title}</p>
                            </h4>
                            <div>
                                {item.description}
                            </div>
                        </div>
                    </div>  
                  </Link>
              ))}
          </div>
      </div>
  );
};

export default NewDeckForm;