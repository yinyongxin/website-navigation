import Base from "../base";
import styles from "./index.module.css";
const WebsitesNavigationBlock = () => {
  return (
    <Base
      class={
        "active:scale-110 active:border-none active:bg-transparent active:bg-none duration-300 bg-gradient-to-b from-primary-content/50 to-secondary-content/50"
      }
    >
      <div class="grid grid-cols-3 grid-rows-3 absolute inset-0 group-active:gap-2 duration-400 opacity-0 group-active:opacity-100">
        <div class="size-full flex justify-center items-center bg-primary-content rounded-lg">
          <svg
            fill-rule="nonzero"
            height="30px"
            width="30px"
            viewBox="0,0,256,256"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            class="instagram"
          >
            <g
              style="mix-blend-mode: normal"
              text-anchor="none"
              font-size="none"
              font-weight="none"
              font-family="none"
              stroke-dashoffset="0"
              stroke-dasharray=""
              stroke-miterlimit="10"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              stroke-width="1"
              stroke="none"
              fill-rule="nonzero"
            >
              <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="size-full flex justify-center items-center bg-primary-content rounded-lg">
          <svg
            fill-rule="nonzero"
            height="30px"
            width="30px"
            viewBox="0,0,256,256"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            class="instagram"
          >
            <g
              style="mix-blend-mode: normal"
              text-anchor="none"
              font-size="none"
              font-weight="none"
              font-family="none"
              stroke-dashoffset="0"
              stroke-dasharray=""
              stroke-miterlimit="10"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              stroke-width="1"
              stroke="none"
              fill-rule="nonzero"
            >
              <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="absolute inset-0 flex flex-col justify-center gap-3 items-center duration-300 opacity-100 group-active:opacity-0">
        <div>HOVER</div>
        <div>FOR</div>
        <div>WEBSITWS</div>
      </div>
    </Base>
  );
};

export default WebsitesNavigationBlock;
