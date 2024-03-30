import React, { useState } from "react";
import Button from "../general components/Button";
import { Link } from "react-router-dom";
import avatar from "client/src/assets/images/Glody.png";

// function Nav() {
//   return (
// <div className="flex items-center justify-between border-b bg-[#0F1A22]">
// <div className="flex items-center p-4 pl-8 border-r">
//   <Link to="/">
//     <svg
//       width="50"
//       height="50"
//       viewBox="0 0 448 512"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M166.837 8.00991C156.967 7.83691 147.337 9.9119 137.879 15.6599L137.888 15.6339C133.225 18.4709 128.318 22.5809 123.665 23.5749C108.44 26.8369 95.6002 35.5119 81.1072 40.1199C74.2132 42.3069 70.8972 46.5269 71.1042 53.6739C68.2762 58.7969 63.8122 62.0039 58.6252 64.4539C54.0302 66.6159 49.6522 69.0859 48.2842 74.5389C48.2622 74.5569 48.2392 74.5729 48.2172 74.5919C42.8132 80.8899 37.1302 86.9699 31.6192 96.3849L200.587 40.9339C193.277 33.9849 185.687 28.1039 194.135 17.4409C186.558 17.9559 181.201 22.3509 174.818 21.3639C178.44 15.9739 186.191 17.1149 190.332 11.8199C182.335 9.63791 174.513 8.14391 166.837 8.00991ZM257.512 41.6559C250.392 42.0979 243.542 42.6599 237.633 47.7739C230.613 53.8099 222.723 55.5249 214.763 48.8119C208.755 43.7419 202.9 44.7019 196.087 47.9999C180.355 55.6349 164.218 62.4569 148.261 69.6039C111.245 86.2627 74.2378 102.939 37.2382 119.634C25.4102 123.502 24.8862 124.577 27.6062 136.359C29.5942 144.961 33.1812 154.016 23.0882 160.431C21.9821 160.932 21.0462 161.745 20.3949 162.769C19.7435 163.794 19.4052 164.987 19.4212 166.201C19.4112 166.207 19.4022 166.21 19.3922 166.214C16.7722 175.368 18.9692 184.267 20.6322 193.258C21.6892 198.95 24.3362 198.733 28.7092 196.655C38.6032 191.939 48.6422 187.52 58.6712 183.102C90.3812 169.162 122.097 155.232 153.818 141.312C154.707 141.348 155.597 141.267 156.465 141.07C155.435 141.614 154.483 142.26 153.963 143.472L121.434 162.537L72.4512 187.492C58.4182 189.914 46.2472 197.495 32.9462 201.796C24.7142 204.452 26.3502 207.318 31.9612 211.013C37.2112 217.338 44.9462 218.901 52.2012 221.359C52.2112 221.353 52.2212 221.349 52.2312 221.342C57.8532 223.978 63.4412 226.702 69.1262 229.21C74.4122 231.56 79.3262 232.372 82.5432 225.668C84.3512 221.864 87.6402 221.312 91.5792 223.12C97.7172 225.98 104.215 226.065 110.785 224.93L110.779 224.936C110.793 224.937 110.807 224.936 110.819 224.938L110.852 224.965L110.898 224.944C113.388 225.161 115.847 225.193 118.008 223.61C120.981 223.61 123.98 223.375 126.917 223.673C140.904 225.101 155.469 220.347 168.941 227.793C171.499 229.202 173.884 226.411 176.17 225.246C200.444 212.822 224.69 200.343 248.907 187.809C281.074 171.232 313.231 154.658 345.374 138.086C348.13 136.659 354.409 136.036 348.934 130.461V130.415C345.18 122.854 341.816 115.149 340.484 106.725C340.494 106.715 340.502 106.705 340.51 106.695C340.085 100.416 337.944 94.6609 335.233 89.0409C332.883 84.2249 330.237 82.8859 324.752 85.3259C312.057 90.9819 299.035 96.1429 286.024 100.796C273.012 105.45 260.931 112.759 246.944 114.656C246.93 114.654 246.916 114.654 246.902 114.651L246.909 114.647C246.782 112.505 248.715 112.749 249.881 112.099L318.9 73.6699C319.153 67.2269 316.84 61.4349 314.382 55.6879C314.378 55.6912 314.373 55.6936 314.367 55.6949L314.37 55.6879C311.063 47.3119 305.263 44.8619 296.878 48.2139C291.193 50.5692 285.135 51.8974 278.986 52.1369V52.1179L278.942 52.1339L274.162 51.7479C267.439 50.3109 263.211 44.7719 257.509 41.6549L257.512 41.6559ZM359.093 150.663C357.53 150.757 355.763 151.413 353.679 152.507C328.234 165.853 302.563 178.763 276.965 191.802C246.885 207.162 216.759 222.361 186.788 237.884C184.9 238.851 179.598 238.644 182.128 243.369C185.432 249.519 184.431 256.02 184.601 262.468C184.598 262.468 184.595 262.471 184.592 262.472V262.498C184.52 265.658 184.455 268.814 184.395 271.968C185.099 277.028 186.954 281.86 189.816 286.092L189.848 286.099L189.825 286.109L193.484 290.98L202.059 301.714C203.523 311.698 208.609 311.806 217.194 308.87C248.313 298.208 279.74 288.413 311.049 278.293L312.856 280.155C312.865 280.154 312.873 280.152 312.881 280.151L278.756 296.301C273.072 297.819 267.913 300.476 262.807 303.358C262.059 303.274 261.302 303.399 260.62 303.718C259.938 304.037 259.357 304.537 258.941 305.165C245.386 310.207 232.18 316.142 219.409 322.929C219.199 322.83 218.958 322.816 218.738 322.89C218.517 322.964 218.334 323.12 218.225 323.326C215.473 323.626 212.888 324.794 210.843 326.66C206.099 327.726 200.767 329.272 201.02 334.928C201.652 349.068 196.746 361.925 193.096 375.116L193.087 375.119C191.965 377.075 191.469 379.328 191.668 381.574C191.867 383.82 192.751 385.951 194.199 387.679C196.982 391.013 200.677 387.082 203.731 385.971C250.082 369.166 296.394 352.253 342.666 335.235C348.783 332.994 356.633 332 360.347 327.618C364.341 322.892 358.937 315.275 359.353 308.796C359.875 306.016 360.406 303.236 360.928 300.446C360.93 300.442 360.931 300.44 360.936 300.438C363.719 291.882 370.532 285.583 374.011 277.415L389.878 255.369C393.248 248.141 401.515 245.863 405.906 239.656L405.701 239.726L405.861 239.638C415.303 233.846 419.341 224.033 425.991 213.823L383.055 227.014C380.623 227.174 378.229 227.531 375.856 227.99C377.116 227.263 378.22 226.296 379.107 225.144C381.746 223.879 384.411 222.642 387.031 221.332C400.856 214.429 416.027 210.407 429.038 201.769C428.688 201.704 428.37 201.522 428.135 201.254C428.433 201.416 428.731 201.579 429.038 201.769C430.294 198.001 429.824 194.169 429.111 190.437L429.137 190.492C428.125 185.206 425.803 182.495 420.102 186.308C416.499 188.889 412.344 190.594 407.967 191.288C407.956 191.295 407.945 191.302 407.933 191.309C407.934 191.295 407.937 191.282 407.941 191.269C400.017 190.672 391.839 190.827 386.4 183.391H386.426C383.878 179.894 381.168 182.414 378.584 183.444C358.612 191.469 338.646 199.508 318.685 207.561C317.187 207.7 315.755 208.041 314.352 208.484C315.209 207.654 315.961 206.72 316.472 205.546C330.907 198.061 345.327 190.549 359.734 183.011C366.014 179.722 376.279 177.355 377.472 172.711C379.026 166.692 369.276 161.749 365.725 155.424C363.738 151.906 361.7 150.506 359.095 150.663H359.093ZM361.707 336.34C360.838 336.282 359.721 336.533 358.287 337.123C307.858 357.937 257.381 378.635 206.857 399.217C202.999 400.826 202.167 402.235 204.147 406.247C208.971 416.004 213.407 425.969 215.893 436.657C215.887 436.658 215.881 436.659 215.875 436.66H215.893V436.672C216.191 439.608 216.905 442.582 216.715 445.492C216.263 452.224 217.483 454.292 224.802 451.039C258.288 436.129 292.136 422.052 325.613 407.134C339.863 400.782 349.567 389.497 355.521 375.04C355.51 375.041 355.499 375.042 355.487 375.043C355.495 375.04 355.498 375.036 355.506 375.028C364.144 365.143 365.491 353.325 364.542 340.91C364.324 338.09 363.62 336.465 361.709 336.339L361.707 336.34ZM417.303 354.817C413.278 354.847 410.645 359.007 408.779 362.73C407.111 366.047 405.903 369.598 404.489 373.05L404.477 373.061C402.002 378.166 400.022 382.728 392.17 381.481C386.649 380.604 379.077 384.987 379.61 390.218C380.712 401.142 373.403 410.495 375.644 421.157C376.506 421.948 377.345 422.247 378.171 422.269C377.174 422.873 376.243 423.596 375.454 424.573C374.062 429.877 372.544 435.163 374.017 440.719C374.025 440.719 374.032 440.716 374.044 440.716C378.346 450.192 381.577 451.398 390.873 448.744C402.133 445.514 402.087 435.923 403.95 427.267C405.656 422.833 406.91 418.353 406.396 413.071L390.131 418.004L390.121 418.049C388.842 418.529 387.381 418.165 386.098 418.697C386.928 418.036 387.665 417.261 388.223 416.269C390.988 414.651 393.616 412.692 396.553 411.463C416.91 402.997 420.209 385.151 421.736 366.285C421.826 362.245 424.627 356.607 419.116 355.071C418.527 354.902 417.916 354.817 417.303 354.819V354.817ZM325.55 413.99C291.295 431.673 258.569 448.932 225.444 465.386C216.932 469.624 215.432 474.232 219.814 481.868C221.674 488.768 226.514 493.111 232.455 496.526V496.534L232.461 496.532C232.462 496.532 232.464 496.532 232.465 496.534L232.483 496.537C234.686 499.494 237.791 500.647 241.293 501.025C253.699 508.344 268.508 501.738 275.33 485.835C284.005 480.92 292.625 475.806 301.372 470.981C306.989 467.883 310.947 464.053 309.615 457.002C309.618 456.999 309.618 456.994 309.622 456.991C311.294 452.356 317.276 451.199 318.414 446.148C317.394 435.242 326.59 426.269 325.56 414.008L325.55 413.99Z"
//         fill="#12C081"
//       />
//     </svg>
//   </Link>

//   <div className="flex items-center justify-between pl-20">
//     <div className="w-4/12">
//       <svg
//         width="19"
//         height="19"
//         viewBox="0 0 19 19"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M16.9694 14.9283C16.5025 14.4812 16.0481 14.0212 15.6067 13.5488C15.2359 13.172 15.0126 12.8979 15.0126 12.8979L12.2214 11.5653C13.339 10.2981 13.9558 8.66674 13.9559 6.97723C13.9559 3.13078 10.8258 0 6.97796 0C3.13012 0 0 3.13078 0 6.97723C0 10.8237 3.13012 13.9545 6.97796 13.9545C8.73541 13.9545 10.3374 13.2966 11.5665 12.2211L12.8993 15.012C12.8993 15.012 13.1734 15.2353 13.5502 15.6061C13.936 15.9679 14.4434 16.4573 14.9299 16.9686L16.2836 18.3561L16.8857 19L19 16.8859L18.356 16.2839C17.9782 15.9131 17.4738 15.4207 16.9694 14.9283ZM6.97796 11.961C4.22964 11.961 1.9937 9.72526 1.9937 6.97723C1.9937 4.2292 4.22964 1.99349 6.97796 1.99349C9.72629 1.99349 11.9622 4.2292 11.9622 6.97723C11.9622 9.72526 9.72629 11.961 6.97796 11.961Z"
//           fill="#12C081"
//         />
//       </svg>
//     </div>
//     <input
//       className="pl-4 bg-transparent text-white placeholder-gray-100"
//       placeholder="Recherche"
//       type="text"
//     />
//   </div>
// </div>
// <ul className="flex pr-10 font-medium items-center cursor-pointer text-gray-100">
//   <li className="ml-10 hover:text-green-500 block focus:outline-none focus:text-green-500">
//     <Link to="/">ACCUEIL</Link>
//   </li>
//   <li className="ml-10 hover:text-green-500">
//     <Link to="/mediatheque">MEDIATHEQUE</Link>
//   </li>
//   <li className="ml-10 hover:text-green-500">
//     <Link to="/gallerie">GALLERIE</Link>
//   </li>
//   <li className="ml-10 hover:text-green-500">
//     <Link to="/forum">FORUM</Link>
//   </li>
//   <li className="ml-10 hover:text-green-500">
//     <Link to="/contact">CONTACT</Link>
//   </li>
//   <Link to="/connexion">
//     <Button
//       name="SE CONNECTER"
//       class="bg-green-500 text-white text-sm font-xl p-2.5 px-4 rounded-3xl ml-10 hover:bg-green-600 ease duration-500 "
//     />
//   </Link>
// </ul>
//     </div>
//   );
// }

// export default Nav;

//     //   <img
//     //   className="w-20 h-20 border rounded-full border-4 border-green-500"
//     //   src={avatar}
//     //   alt=""
//     // />

// import Button from './Button';

const Nav = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b bg-[#0F1A22] shadow-md">
      <div className=" w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-[#0F1A22] border-b md:px-10 px-7">
          <div className=" cursor-pointer mx-auto flex items-center font-Coiny text-gray-800">
            <div className="flex items-center p-4 pl-8 border-r">
              <Link to="/">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 448 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M166.837 8.00991C156.967 7.83691 147.337 9.9119 137.879 15.6599L137.888 15.6339C133.225 18.4709 128.318 22.5809 123.665 23.5749C108.44 26.8369 95.6002 35.5119 81.1072 40.1199C74.2132 42.3069 70.8972 46.5269 71.1042 53.6739C68.2762 58.7969 63.8122 62.0039 58.6252 64.4539C54.0302 66.6159 49.6522 69.0859 48.2842 74.5389C48.2622 74.5569 48.2392 74.5729 48.2172 74.5919C42.8132 80.8899 37.1302 86.9699 31.6192 96.3849L200.587 40.9339C193.277 33.9849 185.687 28.1039 194.135 17.4409C186.558 17.9559 181.201 22.3509 174.818 21.3639C178.44 15.9739 186.191 17.1149 190.332 11.8199C182.335 9.63791 174.513 8.14391 166.837 8.00991ZM257.512 41.6559C250.392 42.0979 243.542 42.6599 237.633 47.7739C230.613 53.8099 222.723 55.5249 214.763 48.8119C208.755 43.7419 202.9 44.7019 196.087 47.9999C180.355 55.6349 164.218 62.4569 148.261 69.6039C111.245 86.2627 74.2378 102.939 37.2382 119.634C25.4102 123.502 24.8862 124.577 27.6062 136.359C29.5942 144.961 33.1812 154.016 23.0882 160.431C21.9821 160.932 21.0462 161.745 20.3949 162.769C19.7435 163.794 19.4052 164.987 19.4212 166.201C19.4112 166.207 19.4022 166.21 19.3922 166.214C16.7722 175.368 18.9692 184.267 20.6322 193.258C21.6892 198.95 24.3362 198.733 28.7092 196.655C38.6032 191.939 48.6422 187.52 58.6712 183.102C90.3812 169.162 122.097 155.232 153.818 141.312C154.707 141.348 155.597 141.267 156.465 141.07C155.435 141.614 154.483 142.26 153.963 143.472L121.434 162.537L72.4512 187.492C58.4182 189.914 46.2472 197.495 32.9462 201.796C24.7142 204.452 26.3502 207.318 31.9612 211.013C37.2112 217.338 44.9462 218.901 52.2012 221.359C52.2112 221.353 52.2212 221.349 52.2312 221.342C57.8532 223.978 63.4412 226.702 69.1262 229.21C74.4122 231.56 79.3262 232.372 82.5432 225.668C84.3512 221.864 87.6402 221.312 91.5792 223.12C97.7172 225.98 104.215 226.065 110.785 224.93L110.779 224.936C110.793 224.937 110.807 224.936 110.819 224.938L110.852 224.965L110.898 224.944C113.388 225.161 115.847 225.193 118.008 223.61C120.981 223.61 123.98 223.375 126.917 223.673C140.904 225.101 155.469 220.347 168.941 227.793C171.499 229.202 173.884 226.411 176.17 225.246C200.444 212.822 224.69 200.343 248.907 187.809C281.074 171.232 313.231 154.658 345.374 138.086C348.13 136.659 354.409 136.036 348.934 130.461V130.415C345.18 122.854 341.816 115.149 340.484 106.725C340.494 106.715 340.502 106.705 340.51 106.695C340.085 100.416 337.944 94.6609 335.233 89.0409C332.883 84.2249 330.237 82.8859 324.752 85.3259C312.057 90.9819 299.035 96.1429 286.024 100.796C273.012 105.45 260.931 112.759 246.944 114.656C246.93 114.654 246.916 114.654 246.902 114.651L246.909 114.647C246.782 112.505 248.715 112.749 249.881 112.099L318.9 73.6699C319.153 67.2269 316.84 61.4349 314.382 55.6879C314.378 55.6912 314.373 55.6936 314.367 55.6949L314.37 55.6879C311.063 47.3119 305.263 44.8619 296.878 48.2139C291.193 50.5692 285.135 51.8974 278.986 52.1369V52.1179L278.942 52.1339L274.162 51.7479C267.439 50.3109 263.211 44.7719 257.509 41.6549L257.512 41.6559ZM359.093 150.663C357.53 150.757 355.763 151.413 353.679 152.507C328.234 165.853 302.563 178.763 276.965 191.802C246.885 207.162 216.759 222.361 186.788 237.884C184.9 238.851 179.598 238.644 182.128 243.369C185.432 249.519 184.431 256.02 184.601 262.468C184.598 262.468 184.595 262.471 184.592 262.472V262.498C184.52 265.658 184.455 268.814 184.395 271.968C185.099 277.028 186.954 281.86 189.816 286.092L189.848 286.099L189.825 286.109L193.484 290.98L202.059 301.714C203.523 311.698 208.609 311.806 217.194 308.87C248.313 298.208 279.74 288.413 311.049 278.293L312.856 280.155C312.865 280.154 312.873 280.152 312.881 280.151L278.756 296.301C273.072 297.819 267.913 300.476 262.807 303.358C262.059 303.274 261.302 303.399 260.62 303.718C259.938 304.037 259.357 304.537 258.941 305.165C245.386 310.207 232.18 316.142 219.409 322.929C219.199 322.83 218.958 322.816 218.738 322.89C218.517 322.964 218.334 323.12 218.225 323.326C215.473 323.626 212.888 324.794 210.843 326.66C206.099 327.726 200.767 329.272 201.02 334.928C201.652 349.068 196.746 361.925 193.096 375.116L193.087 375.119C191.965 377.075 191.469 379.328 191.668 381.574C191.867 383.82 192.751 385.951 194.199 387.679C196.982 391.013 200.677 387.082 203.731 385.971C250.082 369.166 296.394 352.253 342.666 335.235C348.783 332.994 356.633 332 360.347 327.618C364.341 322.892 358.937 315.275 359.353 308.796C359.875 306.016 360.406 303.236 360.928 300.446C360.93 300.442 360.931 300.44 360.936 300.438C363.719 291.882 370.532 285.583 374.011 277.415L389.878 255.369C393.248 248.141 401.515 245.863 405.906 239.656L405.701 239.726L405.861 239.638C415.303 233.846 419.341 224.033 425.991 213.823L383.055 227.014C380.623 227.174 378.229 227.531 375.856 227.99C377.116 227.263 378.22 226.296 379.107 225.144C381.746 223.879 384.411 222.642 387.031 221.332C400.856 214.429 416.027 210.407 429.038 201.769C428.688 201.704 428.37 201.522 428.135 201.254C428.433 201.416 428.731 201.579 429.038 201.769C430.294 198.001 429.824 194.169 429.111 190.437L429.137 190.492C428.125 185.206 425.803 182.495 420.102 186.308C416.499 188.889 412.344 190.594 407.967 191.288C407.956 191.295 407.945 191.302 407.933 191.309C407.934 191.295 407.937 191.282 407.941 191.269C400.017 190.672 391.839 190.827 386.4 183.391H386.426C383.878 179.894 381.168 182.414 378.584 183.444C358.612 191.469 338.646 199.508 318.685 207.561C317.187 207.7 315.755 208.041 314.352 208.484C315.209 207.654 315.961 206.72 316.472 205.546C330.907 198.061 345.327 190.549 359.734 183.011C366.014 179.722 376.279 177.355 377.472 172.711C379.026 166.692 369.276 161.749 365.725 155.424C363.738 151.906 361.7 150.506 359.095 150.663H359.093ZM361.707 336.34C360.838 336.282 359.721 336.533 358.287 337.123C307.858 357.937 257.381 378.635 206.857 399.217C202.999 400.826 202.167 402.235 204.147 406.247C208.971 416.004 213.407 425.969 215.893 436.657C215.887 436.658 215.881 436.659 215.875 436.66H215.893V436.672C216.191 439.608 216.905 442.582 216.715 445.492C216.263 452.224 217.483 454.292 224.802 451.039C258.288 436.129 292.136 422.052 325.613 407.134C339.863 400.782 349.567 389.497 355.521 375.04C355.51 375.041 355.499 375.042 355.487 375.043C355.495 375.04 355.498 375.036 355.506 375.028C364.144 365.143 365.491 353.325 364.542 340.91C364.324 338.09 363.62 336.465 361.709 336.339L361.707 336.34ZM417.303 354.817C413.278 354.847 410.645 359.007 408.779 362.73C407.111 366.047 405.903 369.598 404.489 373.05L404.477 373.061C402.002 378.166 400.022 382.728 392.17 381.481C386.649 380.604 379.077 384.987 379.61 390.218C380.712 401.142 373.403 410.495 375.644 421.157C376.506 421.948 377.345 422.247 378.171 422.269C377.174 422.873 376.243 423.596 375.454 424.573C374.062 429.877 372.544 435.163 374.017 440.719C374.025 440.719 374.032 440.716 374.044 440.716C378.346 450.192 381.577 451.398 390.873 448.744C402.133 445.514 402.087 435.923 403.95 427.267C405.656 422.833 406.91 418.353 406.396 413.071L390.131 418.004L390.121 418.049C388.842 418.529 387.381 418.165 386.098 418.697C386.928 418.036 387.665 417.261 388.223 416.269C390.988 414.651 393.616 412.692 396.553 411.463C416.91 402.997 420.209 385.151 421.736 366.285C421.826 362.245 424.627 356.607 419.116 355.071C418.527 354.902 417.916 354.817 417.303 354.819V354.817ZM325.55 413.99C291.295 431.673 258.569 448.932 225.444 465.386C216.932 469.624 215.432 474.232 219.814 481.868C221.674 488.768 226.514 493.111 232.455 496.526V496.534L232.461 496.532C232.462 496.532 232.464 496.532 232.465 496.534L232.483 496.537C234.686 499.494 237.791 500.647 241.293 501.025C253.699 508.344 268.508 501.738 275.33 485.835C284.005 480.92 292.625 475.806 301.372 470.981C306.989 467.883 310.947 464.053 309.615 457.002C309.618 456.999 309.618 456.994 309.622 456.991C311.294 452.356 317.276 451.199 318.414 446.148C317.394 435.242 326.59 426.269 325.56 414.008L325.55 413.99Z"
                    fill="#12C081"
                  />
                </svg>
              </Link>

              <div className="flex items-center justify-between pl-20">
                <div className="w-4/12">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9694 14.9283C16.5025 14.4812 16.0481 14.0212 15.6067 13.5488C15.2359 13.172 15.0126 12.8979 15.0126 12.8979L12.2214 11.5653C13.339 10.2981 13.9558 8.66674 13.9559 6.97723C13.9559 3.13078 10.8258 0 6.97796 0C3.13012 0 0 3.13078 0 6.97723C0 10.8237 3.13012 13.9545 6.97796 13.9545C8.73541 13.9545 10.3374 13.2966 11.5665 12.2211L12.8993 15.012C12.8993 15.012 13.1734 15.2353 13.5502 15.6061C13.936 15.9679 14.4434 16.4573 14.9299 16.9686L16.2836 18.3561L16.8857 19L19 16.8859L18.356 16.2839C17.9782 15.9131 17.4738 15.4207 16.9694 14.9283ZM6.97796 11.961C4.22964 11.961 1.9937 9.72526 1.9937 6.97723C1.9937 4.2292 4.22964 1.99349 6.97796 1.99349C9.72629 1.99349 11.9622 4.2292 11.9622 6.97723C11.9622 9.72526 9.72629 11.961 6.97796 11.961Z"
                      fill="#12C081"
                    />
                  </svg>
                </div>
                <input
                  className="pl-4 bg-transparent text-white placeholder-gray-100"
                  placeholder="Recherche"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <div name={open ? "close" : "menu"}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.83333 39H31.1667C32.175 39 33 38.175 33 37.1667C33 36.1583 32.175 35.3333 31.1667 35.3333H1.83333C0.825 35.3333 0 36.1583 0 37.1667C0 38.175 0.825 39 1.83333 39ZM1.83333 29.8333H31.1667C32.175 29.8333 33 29.0083 33 28C33 26.9917 32.175 26.1667 31.1667 26.1667H1.83333C0.825 26.1667 0 26.9917 0 28C0 29.0083 0.825 29.8333 1.83333 29.8333ZM0 18.8333C0 19.8417 0.825 20.6667 1.83333 20.6667H31.1667C32.175 20.6667 33 19.8417 33 18.8333C33 17.825 32.175 17 31.1667 17H1.83333C0.825 17 0 17.825 0 18.8333Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <ul
            className={`md:flex md:flex-row md:pt-0 md:font-medium items-center text-gray-100 flex flex-col  gap-6 pt-6 w-full items.center md:bg-[#0F1A22] md:pb-0 pb-12 absolute md:static bg-[#0F1A22] md:z-auto z-[-1] left-0  md:w-auto md:pl-0 px-8 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <li className="ml-10 hover:text-green-500 block focus:outline-none focus:text-green-500 md:ml-8  md:my-0 ">
              <Link to="/">ACCUEIL</Link>
            </li>
            <li className="ml-10 hover:text-green-500 md:ml-8  md:my-0 ">
              <Link to="/mediatheque">MEDIATHEQUE</Link>
            </li>
            <li className="ml-10 hover:text-green-500 md:ml-8  md:my-0 ">
              <Link to="/gallerie">GALLERIE</Link>
            </li>
            <li className="ml-10 hover:text-green-500 md:ml-8  md:my-0 ">
              <Link to="/forum">FORUM</Link>
            </li>
            <li className="ml-10 hover:text-green-500 md:ml-8  md:my-0 ">
              <Link to="/contact">CONTACT</Link>
            </li>

            <Button
              name="SE CONNECTER"
              class="bg-green-500 text-white text-sm font-xl p-2.5 px-4 rounded-3xl ml-12 hover:bg-green-600 ease duration-500 "
            />
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Nav;
