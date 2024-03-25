import React, { useState } from "react";

const MessageAdmin = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-deroulant">
      <div
        className="flex items-center justify-between px-16 pt-6 cursor-pointer"
        onClick={toggleMenu}
        //   onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}
      >
        <div className="flex items-center">
          <svg
            width="23"
            height="19"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.3 19C1.6675 19 1.12623 18.7676 0.6762 18.3029C0.226167 17.8382 0.000766667 17.2789 0 16.625V2.375C0 1.72187 0.2254 1.16296 0.6762 0.69825C1.127 0.233541 1.66827 0.000791667 2.3 0H20.7C21.3325 0 21.8741 0.23275 22.3249 0.69825C22.7757 1.16375 23.0008 1.72267 23 2.375V16.625C23 17.2781 22.775 17.8374 22.3249 18.3029C21.8749 18.7684 21.3333 19.0008 20.7 19H2.3ZM11.5 10.6875L20.7 4.75V2.375L11.5 8.3125L2.3 2.375V4.75L11.5 10.6875Z"
              fill="white"
            />
          </svg>

          <h2 className="text-lg text-gray-100 pl-4">Message</h2>
        </div>

        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2534 0.346171C15.0268 0.138557 14.7249 0.0275193 14.4142 0.0374778C14.1035 0.0474362 13.8094 0.177575 13.5966 0.399275L7.97823 6.25302L1.99655 0.771077C1.76887 0.569586 1.4692 0.463661 1.16206 0.476117C0.85492 0.488573 0.564898 0.618412 0.354455 0.837671C0.144014 1.05693 0.0299918 1.34806 0.0369445 1.64837C0.0438972 1.94868 0.17127 2.23412 0.39163 2.44324L7.22766 8.70815C7.45427 8.91577 7.75611 9.0268 8.06681 9.01685C8.37751 9.00689 8.67162 8.87675 8.88447 8.65505L15.3053 1.96523C15.5181 1.74346 15.6321 1.44832 15.6224 1.1447C15.6127 0.841086 15.4799 0.553854 15.2534 0.346171Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      {isMenuOpen && (
        <div className="pl-[6.5rem] ">
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-2 hover:text-green-500 ease">
            Nouveau
          </p>
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-2 hover:text-green-500 ease">
            Reçu
          </p>
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-2 hover:text-green-500 ease">
            Envoyé
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageAdmin;

export function Evenements() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-deroulant">
      <div
        className="flex items-center justify-between px-16 pt-6 cursor-pointer"
        onClick={toggleMenu}
        //   onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}
      >
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 18C13.8 18 13.2083 17.7583 12.725 17.275C12.2417 16.7917 12 16.2 12 15.5C12 14.8 12.2417 14.2083 12.725 13.725C13.2083 13.2417 13.8 13 14.5 13C15.2 13 15.7917 13.2417 16.275 13.725C16.7583 14.2083 17 14.8 17 15.5C17 16.2 16.7583 16.7917 16.275 17.275C15.7917 17.7583 15.2 18 14.5 18ZM5 22C4.45 22 3.97933 21.8043 3.588 21.413C3.19667 21.0217 3.00067 20.5507 3 20V6C3 5.45 3.196 4.97933 3.588 4.588C3.98 4.19667 4.45067 4.00067 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.0217 21.805 19.5507 22.0007 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
              fill="#D9D9D9"
            />
          </svg>

          <h2 className="text-lg text-gray-100 pl-4">Evénements</h2>
        </div>

        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2534 0.346171C15.0268 0.138557 14.7249 0.0275193 14.4142 0.0374778C14.1035 0.0474362 13.8094 0.177575 13.5966 0.399275L7.97823 6.25302L1.99655 0.771077C1.76887 0.569586 1.4692 0.463661 1.16206 0.476117C0.85492 0.488573 0.564898 0.618412 0.354455 0.837671C0.144014 1.05693 0.0299918 1.34806 0.0369445 1.64837C0.0438972 1.94868 0.17127 2.23412 0.39163 2.44324L7.22766 8.70815C7.45427 8.91577 7.75611 9.0268 8.06681 9.01685C8.37751 9.00689 8.67162 8.87675 8.88447 8.65505L15.3053 1.96523C15.5181 1.74346 15.6321 1.44832 15.6224 1.1447C15.6127 0.841086 15.4799 0.553854 15.2534 0.346171Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      {isMenuOpen && (
        <div className="pl-[6.5rem] ">
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-2 hover:text-green-500 ease">
            Exposition Virtuelle à venir.
          </p>
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-4 hover:text-green-500 ease">
            Demande de création d'une exposition virtuelle.
          </p>

          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-4 hover:text-green-500 ease">
            Créer un événement.
          </p>
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-4 hover:text-green-500 ease">
            Autres.
          </p>
        </div>
      )}
    </div>
  );
}

export function Utilisateurs() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-deroulant">
      <div
        className="flex items-center justify-between px-16 pt-6 cursor-pointer"
        onClick={toggleMenu}
        //   onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}
      >
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 7C5.5 6.60603 5.5776 6.21593 5.72836 5.85195C5.87913 5.48797 6.1001 5.15726 6.37868 4.87868C6.65726 4.6001 6.98797 4.37913 7.35195 4.22836C7.71593 4.0776 8.10603 4 8.5 4C8.89397 4 9.28407 4.0776 9.64805 4.22836C10.012 4.37913 10.3427 4.6001 10.6213 4.87868C10.8999 5.15726 11.1209 5.48797 11.2716 5.85195C11.4224 6.21593 11.5 6.60603 11.5 7C11.5 7.79565 11.1839 8.55871 10.6213 9.12132C10.0587 9.68393 9.29565 10 8.5 10C7.70435 10 6.94129 9.68393 6.37868 9.12132C5.81607 8.55871 5.5 7.79565 5.5 7ZM8.5 2C7.17392 2 5.90215 2.52678 4.96447 3.46447C4.02678 4.40215 3.5 5.67392 3.5 7C3.5 8.32608 4.02678 9.59785 4.96447 10.5355C5.90215 11.4732 7.17392 12 8.5 12C9.82608 12 11.0979 11.4732 12.0355 10.5355C12.9732 9.59785 13.5 8.32608 13.5 7C13.5 5.67392 12.9732 4.40215 12.0355 3.46447C11.0979 2.52678 9.82608 2 8.5 2ZM15.5 2H14.5V4H15.5C15.894 4 16.2841 4.0776 16.6481 4.22836C17.012 4.37913 17.3427 4.6001 17.6213 4.87868C17.8999 5.15726 18.1209 5.48797 18.2716 5.85195C18.4224 6.21593 18.5 6.60603 18.5 7C18.5 7.39397 18.4224 7.78407 18.2716 8.14805C18.1209 8.51203 17.8999 8.84274 17.6213 9.12132C17.3427 9.3999 17.012 9.62087 16.6481 9.77164C16.2841 9.9224 15.894 10 15.5 10H14.5V12H15.5C16.8261 12 18.0979 11.4732 19.0355 10.5355C19.9732 9.59785 20.5 8.32608 20.5 7C20.5 5.67392 19.9732 4.40215 19.0355 3.46447C18.0979 2.52678 16.8261 2 15.5 2ZM0 19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H12C13.3261 14 14.5979 14.5268 15.5355 15.4645C16.4732 16.4021 17 17.6739 17 19V21H15V19C15 18.2044 14.6839 17.4413 14.1213 16.8787C13.5587 16.3161 12.7956 16 12 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21H0V20V19ZM24 19C24 18.3434 23.8707 17.6932 23.6194 17.0866C23.3681 16.48 22.9998 15.9288 22.5355 15.4645C22.0712 15.0002 21.52 14.6319 20.9134 14.3806C20.3068 14.1293 19.6566 14 19 14H18V16H19C19.7956 16 20.5587 16.3161 21.1213 16.8787C21.6839 17.4413 22 18.2044 22 19V21H24V20V19Z"
              fill="#D9D9D9"
            />
          </svg>

          <h2 className="text-lg text-gray-100 pl-4">Utilisateurs</h2>
        </div>

        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2534 0.346171C15.0268 0.138557 14.7249 0.0275193 14.4142 0.0374778C14.1035 0.0474362 13.8094 0.177575 13.5966 0.399275L7.97823 6.25302L1.99655 0.771077C1.76887 0.569586 1.4692 0.463661 1.16206 0.476117C0.85492 0.488573 0.564898 0.618412 0.354455 0.837671C0.144014 1.05693 0.0299918 1.34806 0.0369445 1.64837C0.0438972 1.94868 0.17127 2.23412 0.39163 2.44324L7.22766 8.70815C7.45427 8.91577 7.75611 9.0268 8.06681 9.01685C8.37751 9.00689 8.67162 8.87675 8.88447 8.65505L15.3053 1.96523C15.5181 1.74346 15.6321 1.44832 15.6224 1.1447C15.6127 0.841086 15.4799 0.553854 15.2534 0.346171Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      {isMenuOpen && (
        <div className="pl-[6.5rem] ">
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-2 hover:text-green-500 ease">
            Demande de création de profil.
          </p>
          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-4 hover:text-green-500 ease">
            Envoyer un message aux utilisateurs.
          </p>

          <p className="text-gray-100 text-sm font-medium cursor-pointer pt-4 hover:text-green-500 ease">
            Voir les utilisateurs.
          </p>
        </div>
      )}
    </div>
  );
}

export function VisiteSite() {
  return (
    <div className="menu-deroulant">
      <div
        className="flex items-center justify-between px-16 pt-6 cursor-pointer"
        //   onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}
      >
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14M14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03886 6.32721 7.5748 5.06149 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57862 18.9317 6.04485 17.6677 5.08 16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14M12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill="#BDBDBD"
              fill-opacity="0.79"
            />
          </svg>

          <h2 className="text-lg text-gray-100 pl-4">Visite le site</h2>
        </div>
      </div>
    </div>
  );
}

export function Deconnexion() {
  return (
    <div className="menu-deroulant">
      <div
        className="flex items-center justify-between px-16 pt-6 cursor-pointer"
        //   onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}
      >
        <div className="flex items-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99395 0V12.1445H12.0061V0H8.99395ZM3.07489 3.07489C1.17476 4.97502 0 7.60049 0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 7.60049 19.8252 4.97502 17.9251 3.07489L15.8102 5.18977C17.1693 6.54878 18.0097 8.42642 18.0097 10.5C18.0097 14.6472 14.6472 18.0097 10.5 18.0097C6.35283 18.0097 2.99029 14.6472 2.99029 10.5C2.99029 8.42642 3.83073 6.54878 5.18977 5.18977L3.07489 3.07489Z"
              fill="#D9D9D9"
            />
          </svg>

          <h2 className="text-lg text-gray-100 pl-4">Se déconnecter.</h2>
        </div>
      </div>
    </div>
  );
}
