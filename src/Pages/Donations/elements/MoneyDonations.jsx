const MoneyDonations = () => {
  return (
    <section>
      <h2>Pénzbeli adomány</h2>
      <div className="content">
        <div>
          <p>
            Támogassa közösségünk munkáját <strong>egész évben</strong> pénzbeli
            adománnyal!
          </p>
          <p>
            {" "}
            Utalását az <strong>123</strong> számú bankszámlánkra várjuk. A
            közlemény rovatba kérjük, írja be: <strong>„adomány”</strong>.
            Hálásan köszönjük minden támogatását!
          </p>
          <p>
            <strong>
              Bízunk benne, hogy minden jószívű adományozó hozzájárulása nem
              csupán anyagi támogatás, hanem hit abban a közösségben, amit együtt
              építünk.
            </strong>
          </p>
        </div>
        <figure>
          <img
            src="/assets/img/forints.webp"
            alt="Forint címletek és érmék egymáson"
          />
        </figure>
      </div>
    </section>
  );
};
export default MoneyDonations;
