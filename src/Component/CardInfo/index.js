import "../../Page/Home/Home.css";

const CardInfo = (props) => {
  const { resp } = props;

  return resp ? (
    <section className="container_home">
      <div className="card_detail_info">
        <div className="img_fluid">
          {resp?.image && (
            <img src={resp?.image} className="img" alt="img"></img>
          )}
        </div>
        <div className="card-body">
          {resp?.brand && (<h2 className="mt-2 fw-500">{resp?.brand}</h2>)}
          {resp?.model && (
            <div className="mt-2">
              Model : <span>{resp?.model} </span>
            </div>
          )}

          {resp?.referenceNumber && (
            <div className="mt-2">
              Reference Number : <span>{resp.referenceNumber} </span>
            </div>
          )}
          {resp?.condition && (
            <div className="mt-2">
              Condition : <span>{resp?.condition} </span>
            </div>
          )}

          <div className="divider">
            <hr className="w-100" />
            {resp?.price && (
              <div className="mt-2">
                Price : <span className="fw-500">{resp?.price} </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default CardInfo;
