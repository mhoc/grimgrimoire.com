import { useState } from "react";

type Props = {
  weapons: { id: string; data: any }[];
};

export const WeaponList = ({ weapons }: Props) => {
  const [search, setSearch] = useState("");

  const filteredWeapons =
    !search || search.length === 0
      ? weapons
      : weapons.filter((w) => {
          return w.data.name.toLowerCase().includes(search.toLowerCase());
        });

  return (
    <>
      <div>
        <textarea
          autoFocus
          id="search-box"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          value={search}
        />
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {filteredWeapons.map((weapon) => (
            <a href={`/${weapon.id}`} key={weapon.id}>
              <img className="item" src={`/${weapon.id}.webp`} />
            </a>
          ))}
        </div>
      </div>
      <style>{`
        #search-box {
          background-color: #44403c;
          border: 0;
          color: #a8a29e;
          font-family: "Geist Mono";
          font-size: 1.1rem;
          height: 1.2rem;
          margin-bottom: 8px;
          outline: none;
          padding: 8px;
          resize: none;
          width: 200px;
        }
        .item {
          max-height: 100px;
          max-width: 100px;
        }
        @media (max-width: 600px) {
          .item {
            max-height: 25vw;
            max-width: 25vw;
          }
        }
      `}</style>
    </>
  );
};
