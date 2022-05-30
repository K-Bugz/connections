import React from "react";
import styled, { keyframes } from "styled-components";

export default function Main() {
  return (
    <div className="bg-zinc-900 sm:px-6 lg:py-16 lg:px-8 z-20">
      <div className="text-center w-full mx-auto py-0 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-blue-400 dark:text-white sm:text-4xl">
          <span className="block">
            Connecting you to a brighter future
          </span>
          <a href="/Signup">
            <span className="block text-blue-400">
              Join today
            </span>
          </a>
        </h2>
      </div>
      <Wrapper>
        {/* Animation for the lines */}
        <svg className="lines" width="1363" height="921" viewBox="0 0 1363 921" fill="none">
          <path id="line1" d="M1 921V789M73 921V575" stroke="#8BD5FF" />
          <path id="line2" d="M37 921V875L93.5 818.5M123 752V408" stroke="#8BD5FF" />
          <path id="line3" d="M303.5 921V661.5L143 501V344.5M143 193V136.5" stroke="#8BD5FF" />
          <path id="line4" d="M277 921L194.5 837.5V642.5L284.5 552.5V507M284.5 426.5V277L225 217.5V0.5" stroke="#8BD5FF" />
          <path id="line5" d="M327 921V785L383.5 728.5V662.5M383.5 549.5V457.5L315 389V113.5" stroke="#8BD5FF" />
          <path id="line6" d="M509 921V823L450 764V403" stroke="#8BD5FF" />
          <path id="line7" d="M653 921.5V724M576.5 584.5L493.5 501.5V135" stroke="#8BD5FF" />
          <path id="line8" d="M581 921V675L523 617V311L564 270V23" stroke="#8BD5FF" />
          <path id="line9" d="M503.5 921V778L597 684.5M666.5 494.5V363" stroke="#8BD5FF" />
          <path id="line10" d="M791.5 921V714.5L731 654M701.5 492.5V133" stroke="#8BD5FF" />
          <path id="line11" d="M703 920.5V732M786 536.5V201.5" stroke="#8BD5FF" />
          <path id="line12" d="M870 513V874L917 921" stroke="#8BD5FF" />
          <path id="line13" d="M852 921V805L932.5 724.5V478L869 414.5V381.5M869 230V49" stroke="#8BD5FF" />
          <path id="line14" d="M1111 922.5V771.5L1056 716.5M994 654.5L991 651.5V276.5" stroke="#8BD5FF" />
          <path id="line15" d="M901.5 920.5L1023 799V731.5M1023 643V396" stroke="#8BD5FF" />
          <path id="line16" d="M955 921V788L1012.5 730.5M1067 675L1082 660V218" stroke="#8BD5FF" />
          <path id="line17" d="M1253 921V815L1145 707V351" stroke="#8BD5FF" />
          <path id="line18" d="M1183.5 921V842L1241.5 784V486L1183 427.5V295.5M1183 214V102.5" stroke="#8BD5FF" />
          <path id="line19" d="M1362 921V787L1303 728V632.5M1303 507V407.5" stroke="#8BD5FF" />
        </svg>
        {/* Animation for the rings */}
        <svg className="ring1" width="159" height="160" viewBox="0 0 159 160" fill="none">
          <path id="ring1" d="M112.776 101.784C109.07 107.576 103.917 112.301 97.8257 115.492C91.7342 118.682 84.9154 120.227 78.0437 119.973C71.1721 119.72 64.4857 117.677 58.6458 114.046C52.8059 110.416 48.0149 105.324 44.7467 99.2738C41.4785 93.2238 39.8462 86.4255 40.0114 79.5511C40.1766 72.6768 42.1335 65.9646 45.6885 60.0786C49.2436 54.1925 54.2736 49.3365 60.2811 45.9908C66.2886 42.6451 73.0655 40.9256 79.9414 41.0025L79.7475 58.3526C75.892 58.3096 72.092 59.2737 68.7234 61.1497C65.3549 63.0258 62.5344 65.7487 60.541 69.0491C58.5476 72.3496 57.4503 76.1133 57.3576 79.9679C57.265 83.8226 58.1803 87.6346 60.0129 91.027C61.8454 94.4194 64.5319 97.2747 67.8065 99.3103C71.081 101.346 74.8303 102.492 78.6834 102.634C82.5366 102.776 86.3601 101.91 89.7757 100.121C93.1914 98.332 96.0809 95.6824 98.1585 92.4343L112.776 101.784Z" stroke="#8BD5FF" strokeWidth="3" />
          <path id="ring1" d="M51.5693 108.431C57.2956 114.157 64.6437 117.985 72.6181 119.396C80.5925 120.807 88.8079 119.733 96.1515 116.319C103.495 112.905 109.612 107.316 113.673 100.31C117.735 93.3039 119.545 85.2186 118.858 77.1495C118.171 69.0804 115.02 61.4174 109.833 55.1986C104.646 48.9797 97.6723 44.5055 89.8573 42.3821C82.0424 40.2586 73.7636 40.5885 66.1424 43.3271C58.5213 46.0656 51.926 51.0805 47.25 57.6924L61.4165 67.7112C64.0385 64.0037 67.7366 61.1917 72.01 59.6561C76.2835 58.1205 80.9256 57.9355 85.3076 59.1262C89.6897 60.3169 93.5999 62.8257 96.5085 66.3128C99.4172 69.7999 101.184 74.0967 101.569 78.6213C101.954 83.1459 100.939 87.6795 98.6619 91.608C96.3845 95.5366 92.9547 98.6703 88.837 100.585C84.7192 102.499 80.1126 103.101 75.6411 102.31C71.1697 101.519 67.0494 99.3725 63.8385 96.1615L51.5693 108.431Z" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_415)">
            <path id="ring1" d="M106.619 62.6047C108.352 65.0328 109.771 67.4521 110.808 69.7445L78.6114 74.5662L79.5 86.5H112.458C111.284 92.9492 108.234 98.9598 103.624 103.744C97.609 109.987 89.408 113.655 80.7447 113.977C72.0815 114.299 63.6307 111.25 57.1686 105.471C50.7065 99.6921 46.7363 91.633 46.0925 82.9877C45.4487 74.3424 48.1815 65.7842 53.7164 59.1118C59.2513 52.4394 67.1574 48.1726 75.7728 47.208C80.7982 46.6454 84.1258 46.5034 87.0245 47.0178C89.7294 47.4978 92.4137 48.6208 95.8435 51.2571C99.3992 53.9901 103.38 58.0638 106.619 62.6047Z" stroke="#8BD5FF" strokeWidth="12" />
          </g>
          <g filter="url(#filter1_f_2_415)">
            <circle id="ring1" cx="79.5" cy="80.5" r="21.0667" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="ring1" cx="79.5" cy="80.5" r="16.9333" stroke="#8BD5FF" strokeWidth="3" />
          <defs>
            <filter id="filter0_f_2_415" x="-6.10352e-05" y="0.699951" width="159" height="159.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_2_415" />
            </filter>
            <filter id="filter1_f_2_415" x="46.4" y="47.4" width="66.2" height="66.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.26667" result="effect1_foregroundBlur_2_415" />
            </filter>
          </defs>
        </svg>

        <svg className="ring2" width="250" height="250" viewBox="0 0 250 250" fill="none">
          <circle id="ring2" cx="125" cy="125" r="75" stroke="#8BD5FF" strokeWidth="3" />
          <path id="ring2" d="M125 50C115.151 50 105.398 51.9399 96.2987 55.709C87.1993 59.4781 78.9314 65.0026 71.967 71.967C65.0026 78.9314 59.4781 87.1993 55.709 96.2987C51.9399 105.398 50 115.151 50 125C50 134.849 51.9399 144.602 55.709 153.701C59.4781 162.801 65.0026 171.069 71.967 178.033C78.9314 184.997 87.1993 190.522 96.2987 194.291C105.398 198.06 115.151 200 125 200L125 167.973C119.357 167.973 113.769 166.862 108.555 164.702C103.341 162.543 98.6037 159.377 94.6133 155.387C90.6228 151.396 87.4575 146.659 85.2978 141.445C83.1382 136.231 82.0267 130.643 82.0267 125C82.0267 119.357 83.1382 113.769 85.2978 108.555C87.4575 103.341 90.6228 98.6037 94.6133 94.6133C98.6037 90.6228 103.341 87.4575 108.555 85.2978C113.769 83.1382 119.357 82.0267 125 82.0267L125 50Z" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_421)">
            <circle id="ring2" cx="125" cy="125" r="69" stroke="#8BD5FF" strokeWidth="12" />
          </g>
          <g filter="url(#filter1_f_2_421)">
            <circle id="ring2" cx="125" cy="125" r="40" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="ring2" cx="125" cy="125" r="35" stroke="#8BD5FF" strokeWidth="3" />
          <defs>
            <filter id="filter0_f_2_421" x="0" y="0" width="250" height="250" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_421" />
            </filter>
            <filter id="filter1_f_2_421" x="63.5" y="63.5" width="123" height="123" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_421" />
            </filter>
          </defs>
        </svg>

        <svg className="ring3" width="211" height="211" viewBox="0 0 211 211" fill="none">
          <circle id="ring3" cx="105.5" cy="105.5" r="55.5" stroke="#8BD5FF" strokeWidth="3" />
          <path id="ring3" d="M105.5 50C90.7805 50 76.6638 55.8473 66.2556 66.2556C55.8473 76.6638 50 90.7805 50 105.5C50 120.22 55.8473 134.336 66.2556 144.744C76.6638 155.153 90.7805 161 105.5 161L105.5 138.867C96.6506 138.867 88.1636 135.351 81.9062 129.094C75.6487 122.836 72.1333 114.349 72.1333 105.5C72.1333 96.6506 75.6487 88.1636 81.9062 81.9062C88.1636 75.6487 96.6506 72.1333 105.5 72.1333L105.5 50Z" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_427)">
            <circle id="ring3" cx="105.5" cy="105.5" r="49.5" stroke="#8BD5FF" strokeWidth="12" />
          </g>
          <g filter="url(#filter1_f_2_427)">
            <circle id="ring3" cx="105.5" cy="105.5" r="29.6" transform="rotate(-76.8834 105.5 105.5)" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="ring3" cx="105.5" cy="105.5" r="25.9" stroke="#8BD5FF" strokeWidth="3" />
          <defs>
            <filter id="filter0_f_2_427" x="0" y="0" width="211" height="211" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_427" />
            </filter>
            <filter id="filter1_f_2_427" x="59.5931" y="59.5931" width="91.8139" height="91.8139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="7.4" result="effect1_foregroundBlur_2_427" />
            </filter>
          </defs>
        </svg>

        <svg className="ring7" width="323" height="315" viewBox="0 0 323 315" fill="none">
          <path id="ring7" d="M243.135 248.393C227.949 261.423 209.63 270.565 189.849 274.984C170.069 279.404 149.459 278.959 129.902 273.692C110.345 268.425 92.465 258.502 77.8946 244.831C63.3242 231.16 52.5283 214.176 46.4931 195.431C40.4579 176.685 39.3758 156.776 43.3458 137.523C47.3157 118.269 56.2111 100.284 69.2192 85.211C82.2274 70.138 98.9336 58.4574 117.812 51.2364C136.69 44.0153 157.138 41.484 177.288 43.8736L175.498 57.9928C157.787 55.8924 139.815 58.1173 123.222 64.4641C106.629 70.811 91.9454 81.0775 80.5121 94.3257C69.0787 107.574 61.2602 123.381 57.7709 140.304C54.2816 157.227 55.2327 174.726 60.5372 191.202C65.8418 207.678 75.3307 222.606 88.1372 234.622C100.944 246.638 116.659 255.359 133.849 259.989C151.038 264.618 169.153 265.009 186.538 261.125C203.924 257.24 220.026 249.205 233.373 237.753L243.135 248.393Z" stroke="#8BD5FF" strokeWidth="3" />
          <path id="ring7" d="M72.235 239.152C90.5062 258.763 115.074 271.853 141.977 276.312C168.881 280.77 196.553 276.338 220.534 263.73C244.515 251.122 263.407 231.071 274.165 206.811C284.923 182.551 286.921 155.494 279.836 130.001C272.751 104.509 256.996 82.0662 235.111 66.2908C213.225 50.5153 186.485 42.3262 159.199 43.0434C131.913 43.7605 105.672 53.3421 84.7054 70.2438C63.7385 87.1455 49.2674 110.383 43.6246 136.209L95.8432 146.88C99.0073 132.398 107.122 119.368 118.878 109.891C130.635 100.414 145.349 95.0409 160.649 94.6388C175.949 94.2367 190.943 98.8285 203.215 107.674C215.486 116.52 224.321 129.104 228.293 143.398C232.266 157.693 231.146 172.864 225.114 186.468C219.081 200.071 208.488 211.314 195.041 218.384C181.594 225.454 166.078 227.939 150.992 225.439C135.907 222.939 122.131 215.599 111.886 204.602L72.235 239.152Z" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_454)">
            <mask id="path-3-inside-1_2_454" fill="white">
              <path id="ring7" d="M283 157.5C283 181.436 275.441 204.802 261.333 224.47C247.226 244.138 227.244 259.17 204.061 267.555C180.878 275.94 155.6 277.277 131.609 271.389C107.619 265.5 86.0599 252.666 69.818 234.604C53.5761 216.542 43.4258 194.113 40.7253 170.32C38.0248 146.526 42.903 122.502 54.7071 101.463C66.5112 80.4244 84.6781 63.3736 106.777 52.5926C128.875 41.8117 153.852 37.815 178.364 41.1373L161.5 157.5H283Z" />
            </mask>
            <path id="ring7" d="M283 157.5C283 181.436 275.441 204.802 261.333 224.47C247.226 244.138 227.244 259.17 204.061 267.555C180.878 275.94 155.6 277.277 131.609 271.389C107.619 265.5 86.0599 252.666 69.818 234.604C53.5761 216.542 43.4258 194.113 40.7253 170.32C38.0248 146.526 42.903 122.502 54.7071 101.463C66.5112 80.4244 84.6781 63.3736 106.777 52.5926C128.875 41.8117 153.852 37.815 178.364 41.1373L161.5 157.5H283Z" stroke="#8BD5FF" strokeWidth="24" mask="url(#path-3-inside-1_2_454)" />
          </g>
          <g filter="url(#filter1_f_2_454)">
            <ellipse cx="161.5" cy="157.5" rx="64.8" ry="62.6667" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <path id="ring7" d="M216.7 157.5C216.7 186.908 192.034 210.833 161.5 210.833C130.966 210.833 106.3 186.908 106.3 157.5C106.3 128.092 130.966 104.167 161.5 104.167C192.034 104.167 216.7 128.092 216.7 157.5Z" stroke="#8BD5FF" strokeWidth="3" />
          <defs>
            <filter id="filter0_f_2_454" x="-0.00012207" y="-0.00012207" width="323" height="315" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_2_454" />
            </filter>
            <filter id="filter1_f_2_454" x="84.6666" y="82.8" width="153.667" height="149.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.26667" result="effect1_foregroundBlur_2_454" />
            </filter>
          </defs>
        </svg>

        <svg className="ring5" width="250" height="250" viewBox="0 0 250 250" fill="none">
          <circle id="ring5" cx="125" cy="125" r="75" stroke="#8BD5FF" strokeWidth="3" />
          <path id="ring5" d="M125 50C115.151 50 105.398 51.9399 96.2987 55.709C87.1993 59.4781 78.9314 65.0026 71.967 71.967C65.0026 78.9314 59.4781 87.1993 55.709 96.2987C51.9399 105.398 50 115.151 50 125C50 134.849 51.9399 144.602 55.709 153.701C59.4781 162.801 65.0026 171.069 71.967 178.033C78.9314 184.997 87.1993 190.522 96.2987 194.291C105.398 198.06 115.151 200 125 200L125 170.09C119.079 170.09 113.215 168.924 107.745 166.658C102.274 164.392 97.3034 161.071 93.1164 156.884C88.9294 152.697 85.6081 147.726 83.3421 142.255C81.0761 136.785 79.9098 130.921 79.9098 125C79.9098 119.079 81.0761 113.215 83.3421 107.745C85.6081 102.274 88.9294 97.3034 93.1164 93.1164C97.3034 88.9294 102.274 85.6081 107.745 83.3421C113.215 81.0761 119.079 79.9098 125 79.9098L125 50Z" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_438)">
            <mask id="path-3-inside-1_2_438" fill="white">
              <path id="ring5" d="M125 200C109.302 200 94.0006 195.075 81.2505 185.918C68.5004 176.761 58.9448 163.835 53.93 148.96C48.9153 134.085 48.6942 118.011 53.298 103.004C57.9018 87.9967 67.0983 74.8122 79.5918 65.3083C92.0853 55.8044 107.246 50.4601 122.937 50.0284C138.629 49.5967 154.061 54.0994 167.058 62.9021C180.055 71.7047 189.962 84.3636 195.384 99.095C200.806 113.826 201.469 129.888 197.28 145.016L125 125V200Z" />
            </mask>
            <path id="ring5" d="M125 200C109.302 200 94.0006 195.075 81.2505 185.918C68.5004 176.761 58.9448 163.835 53.93 148.96C48.9153 134.085 48.6942 118.011 53.298 103.004C57.9018 87.9967 67.0983 74.8122 79.5918 65.3083C92.0853 55.8044 107.246 50.4601 122.937 50.0284C138.629 49.5967 154.061 54.0994 167.058 62.9021C180.055 71.7047 189.962 84.3636 195.384 99.095C200.806 113.826 201.469 129.888 197.28 145.016L125 125V200Z" stroke="#8BD5FF" strokeWidth="24" mask="url(#path-3-inside-1_2_438)" />
          </g>
          <g filter="url(#filter1_f_2_438)">
            <circle id="ring5" cx="125" cy="125" r="40" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="ring5" cx="125" cy="125" r="35" stroke="#8BD5FF" strokeWidth="3" />
          <defs>
            <filter id="filter0_f_2_438" x="0" y="0" width="250" height="250" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_438" />
            </filter>
            <filter id="filter1_f_2_438" x="63.5" y="63.5" width="123" height="123" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_438" />
            </filter>
          </defs>
        </svg>

        <svg className="ring6" width="157" height="167" viewBox="0 0 157 167" fill="none">
          <path id="ring6" d="M62.5 165C79.076 165 94.9731 158.415 106.694 146.694C118.415 134.973 125 119.076 125 102.5C125 85.924 118.415 70.0269 106.694 58.3058C94.9732 46.5848 79.076 40 62.5 40L62.5 65.0793C72.4246 65.0793 81.9427 69.0218 88.9605 76.0396C95.9782 83.0573 99.9207 92.5754 99.9207 102.5C99.9207 112.425 95.9782 121.943 88.9604 128.96C81.9427 135.978 72.4246 139.921 62.5 139.921L62.5 165Z" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_444)">
            <mask id="path-2-inside-1_2_444" fill="white">
              <path id="ring6" d="M125 102.5C125 94.2924 123.383 86.1651 120.242 78.5823C117.102 70.9994 112.498 64.1095 106.694 58.3058C100.891 52.5022 94.0006 47.8984 86.4177 44.7575C78.8349 41.6166 70.7076 40 62.5 40L62.5 102.5H125Z" />
            </mask>
            <path id="ring6" d="M125 102.5C125 94.2924 123.383 86.1651 120.242 78.5823C117.102 70.9994 112.498 64.1095 106.694 58.3058C100.891 52.5022 94.0006 47.8984 86.4177 44.7575C78.8349 41.6166 70.7076 40 62.5 40L62.5 102.5H125Z" stroke="#8BD5FF" strokeWidth="24" mask="url(#path-2-inside-1_2_444)" />
          </g>
          <g filter="url(#filter1_f_2_444)">
            <circle id="ring6" cx="62.5001" cy="102.5" r="33.3333" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="ring6" cx="62.4999" cy="102.5" r="29.1667" stroke="#8BD5FF" strokeWidth="3" />
          <defs>
            <filter id="filter0_f_2_444" x="22.5" y="0" width="142.5" height="142.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_2_444" />
            </filter>
            <filter id="filter1_f_2_444" x="11.0001" y="51" width="103" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="8.33333" result="effect1_foregroundBlur_2_444" />
            </filter>
          </defs>
        </svg>
        {/* Animation for the strokes */}
        <svg className="stroke" width="1003" height="543" viewBox="0 0 1003 543" fill="none">
          <circle id="stroke" cx="52.5" cy="264.5" r="39.5" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter0_f_2_405)">
            <circle id="stroke" cx="52.5" cy="264.5" r="39.5" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="stroke" cx="791.5" cy="485.5" r="43.5" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter1_f_2_405)">
            <circle id="stroke" cx="791.5" cy="485.5" r="43.5" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <circle id="stroke" cx="950.5" cy="52.5" r="39.5" stroke="#8BD5FF" strokeWidth="3" />
          <g filter="url(#filter2_f_2_405)">
            <circle id="stroke" cx="950.5" cy="52.5" r="39.5" stroke="#8BD5FF" strokeWidth="3" />
          </g>
          <defs>
            <filter id="filter0_f_2_405" x="0.966667" y="212.967" width="103.067" height="103.067" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.26667" result="effect1_foregroundBlur_2_405" />
            </filter>
            <filter id="filter1_f_2_405" x="734.9" y="428.9" width="113.2" height="113.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.8" result="effect1_foregroundBlur_2_405" />
            </filter>
            <filter id="filter2_f_2_405" x="898.967" y="0.966667" width="103.067" height="103.067" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.26667" result="effect1_foregroundBlur_2_405" />
            </filter>
          </defs>
        </svg>
        {/* Animation for the larger circles */}
        <svg className="mcircles" width="1282" height="397" viewBox="0 0 1282 397" fill="none">
          <circle cx="51" cy="346" r="6" fill="#37C9E9" />
          <g filter="url(#filter0_f_2_368)">
            <circle cx="51" cy="346" r="21" fill="#3CE5FC" fillOpacity="0.7" />
          </g>
          <circle cx="51" cy="346" r="12.5" stroke="#8BD5FF" />
          <g filter="url(#filter1_f_2_368)">
            <circle cx="51" cy="346" r="12.5" stroke="#8BD5FF" />
          </g>
          <circle cx="243" cy="51" r="6" fill="#37C9E9" />
          <g filter="url(#filter2_f_2_368)">
            <circle cx="243" cy="51" r="21" fill="#3CE5FC" fillOpacity="0.7" />
          </g>
          <circle cx="243" cy="51" r="12.5" stroke="#8BD5FF" />
          <g filter="url(#filter3_f_2_368)">
            <circle cx="243" cy="51" r="12.5" stroke="#8BD5FF" />
          </g>
          <circle cx="378" cy="342" r="6" fill="#37C9E9" />
          <g filter="url(#filter4_f_2_368)">
            <circle cx="378" cy="342" r="21" fill="#3CE5FC" fillOpacity="0.7" />
          </g>
          <circle cx="378" cy="342" r="12.5" stroke="#8BD5FF" />
          <g filter="url(#filter5_f_2_368)">
            <circle cx="378" cy="342" r="12.5" stroke="#8BD5FF" />
          </g>
          <circle cx="629" cy="71" r="6" fill="#37C9E9" />
          <g filter="url(#filter6_f_2_368)">
            <circle cx="629" cy="71" r="21" fill="#3CE5FC" fillOpacity="0.7" />
          </g>
          <circle cx="629" cy="71" r="12.5" stroke="#8BD5FF" />
          <g filter="url(#filter7_f_2_368)">
            <circle cx="629" cy="71" r="12.5" stroke="#8BD5FF" />
          </g>
          <circle cx="919" cy="215" r="6" fill="#37C9E9" />
          <g filter="url(#filter8_f_2_368)">
            <circle cx="919" cy="215" r="21" fill="#3CE5FC" fillOpacity="0.7" />
          </g>
          <circle cx="919" cy="215" r="12.5" stroke="#8BD5FF" />
          <g filter="url(#filter9_f_2_368)">
            <circle cx="919" cy="215" r="12.5" stroke="#8BD5FF" />
          </g>
          <circle cx="1231" cy="345" r="6" fill="#37C9E9" />
          <g filter="url(#filter10_f_2_368)">
            <circle cx="1231" cy="345" r="21" fill="#3CE5FC" fillOpacity="0.7" />
          </g>
          <circle cx="1231" cy="345" r="12.5" stroke="#8BD5FF" />
          <g filter="url(#filter11_f_2_368)">
            <circle cx="1231" cy="345" r="12.5" stroke="#8BD5FF" />
          </g>
          <defs>
            <filter id="filter0_f_2_368" x="0" y="295" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter1_f_2_368" x="34" y="329" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter2_f_2_368" x="192" y="0" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter3_f_2_368" x="226" y="34" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter4_f_2_368" x="327" y="291" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter5_f_2_368" x="361" y="325" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter6_f_2_368" x="578" y="20" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter7_f_2_368" x="612" y="54" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter8_f_2_368" x="868" y="164" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter9_f_2_368" x="902" y="198" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter10_f_2_368" x="1180" y="294" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2_368" />
            </filter>
            <filter id="filter11_f_2_368" x="1214" y="328" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_368" />
            </filter>
          </defs>
        </svg>
        {/* Animations for the smaller circles */}
        <svg className="circle" width="1244" height="851" viewBox="0 0 1244 851" fill="none">
          <circle cx="31" cy="820" r="6" fill="#8BD5FF" />
          <g filter="url(#filter0_f_2_325)">
            <circle cx="31" cy="820" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="103" cy="609" r="6" fill="#8BD5FF" />
          <g filter="url(#filter1_f_2_325)">
            <circle cx="103" cy="609" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="173" cy="166" r="6" fill="#8BD5FF" />
          <g filter="url(#filter2_f_2_325)">
            <circle cx="173" cy="166" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="255" cy="31" r="6" fill="#8BD5FF" />
          <g filter="url(#filter3_f_2_325)">
            <circle cx="255" cy="31" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="523" cy="165" r="6" fill="#8BD5FF" />
          <g filter="url(#filter4_f_2_325)">
            <circle cx="523" cy="165" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="594" cy="57" r="6" fill="#8BD5FF" />
          <g filter="url(#filter5_f_2_325)">
            <circle cx="594" cy="57" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="696" cy="393" r="6" fill="#8BD5FF" />
          <g filter="url(#filter6_f_2_325)">
            <circle cx="696" cy="393" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="816" cy="231" r="6" fill="#8BD5FF" />
          <g filter="url(#filter7_f_2_325)">
            <circle cx="816" cy="231" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="900" cy="547" r="6" fill="#8BD5FF" />
          <g filter="url(#filter8_f_2_325)">
            <circle cx="900" cy="547" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="899" cy="79" r="6" fill="#8BD5FF" />
          <g filter="url(#filter9_f_2_325)">
            <circle cx="899" cy="79" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="1053" cy="427" r="6" fill="#8BD5FF" />
          <g filter="url(#filter10_f_2_325)">
            <circle cx="1053" cy="427" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="1112" cy="249" r="6" fill="#8BD5FF" />
          <g filter="url(#filter11_f_2_325)">
            <circle cx="1112" cy="249" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <circle cx="1175" cy="385" r="6" fill="#8BD5FF" />
          <g filter="url(#filter12_f_2_325)">
            <circle cx="1175" cy="385" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
            <circle cx="1213" cy="133" r="6" fill="#8BD5FF" />
          <g filter="url(#filter13_f_2_325)">
            <circle cx="1213" cy="133" r="11" fill="#3CE5FC" fillOpacity="0.6" />
          </g>
          <defs>
            <filter id="filter0_f_2_325, filter1_f_2_325, filter2_f_2_325, filter3_f_2_325, filter4_f_2_32, filter5_f_2_325, filter6_f_2_325, filter7_f_2_325, filter8_f_2_325, filter9_f_2_325, filter10_f_2_325, filter11_f_2_325, filter12_f_2_325, filter13_f_2_325" x="0" y="789" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_325" />
            </filter>
          </defs>
        </svg>
      </Wrapper>
    </div>
  );
}

// Animation detailed 
const dash = keyframes`
  from { stroke-dashoffset: 2000}
  to { stroke-dashoffset: 0; }
`;

const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

// Postion the circles and lines
const Wrapper = styled.div`
position: relative;
width: 1440px;
height: 1024px;
margin: 0 auto;
background: radial-gradient(50% 45.31% at 50% 65.43%, #6B7AF0 0%, #18181B 100%);
media: screen and (min-width: 900px);
media: screen and (max-width: 600px);

#line1,
#line2,
#line3,
#line4,
#line5,
#line6,
#line7,
#line8,
#line9,
#line10,
#line11,
#line12,
#line13,
#line14,
#line15,
#line16,
#line17,
#line18,
#line19,
#stroke {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 10s infinite linear forwards;
}

.lines {
  position: absolute;
  left: 43px;
  top: 103.5px;
}

#ring1 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 5s .3s infinite linear forwards;
}

#ring2 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 6s 5s infinite linear forwards;
}

#ring3 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 8s infinite linear forwards;
}

#ring7 {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: ${dash} 7s infinite linear forwards;
}

#ring5 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 5s infinite linear forwards;
}

#ring6 {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: ${dash} 3s 1.3s infinite linear forwards;
}

.ring1 {
  position: absolute;
  left: 85px;
  top: 815px;
}

.ring2 {
  position: absolute;
  left: 62px;
  top: 250px;
}

.ring3 {
  position: absolute;
  left: 321px;
  top: 605px;
}

.ring7 {
  position: absolute;
  left: 570px;
  top: 550px;
}

.ring5 {
  position: absolute;
  left: 787px;
  top: 285px;
}

.ring6 {
  position: absolute;
  left: 1283px;
  top: 573px;
}

.stroke {
  position: absolute;
  left: 275px;
  top: 305px;
}

.mcircles {
  position: absolute;
  left: 115px;
  top: 170px;
  opacity: 0;
  animation: ${fadein} 2s 2s infinite ease forwards;
}

.circle {
  position: absolute;
  left: 14px;
  top: 75px;
  opacity: 0;
  animation: ${fadein} 1s 3s infinite ease forwards;
}
`;