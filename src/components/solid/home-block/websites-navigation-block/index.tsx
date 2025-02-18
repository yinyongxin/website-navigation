import Base from "../base";
import styles from "./index.module.css";
const WebsitesNavigationBlock = () => {
  return (
    <Base
      class={
        "hover:scale-105 hover:border-none bg-transparent hover:bg-none duration-300 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"
      }
    >
      <div class="grid grid-cols-3 grid-rows-3 absolute inset-0 duration-400 opacity-0 group-hover:opacity-100">
        <div class="justify-self-start align-self-start size-full group-hover:size-4/5 flex justify-center items-center glass bg-primary-content/30 rounded-none rounded-tl-3xl rounded-none group-hover:rounded-lg duration-1000">
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
        <div class="justify-self-center align-self-start size-full group-hover:size-4/5 flex justify-center items-center glass bg-primary-content/30 rounded-none group-hover:rounded-lg duration-1000">
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
        <div class="justify-self-end align-self-start size-full group-hover:size-4/5 flex justify-center items-center glass bg-primary-content/30 rounded-none rounded-tr-3xl rounded-none group-hover:rounded-lg duration-1000">
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
      <div class="absolute inset-0 flex flex-col justify-center gap-3 items-center duration-200 backdrop-blur bg-white/20 rounded-3xl opacity-100 group-hover:opacity-0">
        <div>HOVER</div>
        <div>FOR</div>
        <div>WEBSITWS</div>
      </div>
    </Base>
  );
};

export default WebsitesNavigationBlock;
