import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import instruction from "../../images/instruction.jpg";
import guests from "../../images/guests.jpg";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div className="join">
      <div className="head">
        <div className="row">
          <div>
            <h2>Ahmed Hassan ، اعرض عقارك علي Bookme.com</h2>
            <span>التسجيل مجاني ويستغرق 15 دقيقة فقط، ابدأ اليوم</span>
            <br />
            <Link to="/AppointmentBooking"> اعرض عقارك الان</Link>
          </div>
        </div>
      </div>
      <div className="instruction">
        <div className="row">
          <div>
            <h2>راحة بالك على رأس أولوياتنا</h2>
            <p>تعرّف على ما نتيحه لك لمساعدتك على استقبال الضيوف بثقة أكبر:</p>
            <ul>
              <li>
                <IoMdCheckmarkCircleOutline />
                <span>
                  إعداد القواعد الداخلية التي يجب أن يوافق عليها الضيف قبل
                  إقامته
                </span>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline />
                <span>طلب تأمين ضد الأضرار لضمان حماية إضافية</span>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline />
                <span>الإبلاغ عن سوء سلوك الضيوف إذا حدث خطأ ما</span>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline />
                <span>توفّر الدعم على مدار الساعة بأكثر من 43 لغة</span>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline />
                <span>
                  الحماية ضد مطالبات المسؤولية من الضيوف والجيران، بما يصل إلى
                  1,000,000 دولار أمريكي لكل حجز
                </span>
              </li>
            </ul>
          </div>
          <div>
            <img src={instruction} alt="instruction" />
          </div>
        </div>
      </div>
      <div className="desc">
        <h2>ما هو الوصف الذي ينطبق عليك أكثر؟</h2>
        <p>حدد إحدى الخيارات التالية للاطلاع على معلومات مخصصة لك</p>
        <ul>
          <li>
            <h4>أملك عقاراً أؤجره من فترة لأخرى</h4>
            <div>
              <AiOutlineCheck />
              <span>هذا العقار هو بيتي حيث توجد ممتلكاتي الشخصية</span>
              <br /> <br />
              <AiOutlineCheck />
              <span>لديّ خبرة محدودة في مجال الضيافة</span>
            </div>
          </li>
          <li>
            <h4>لديّ عقارات عدة أؤجرها على مدار العام</h4>
            <div>
              <AiOutlineCheck />
              <span>هذه العقارات مستخدمة من قِبل الضيوف بشكل أساسي</span>
              <br />
              <br />
              <AiOutlineCheck />
              <span>لديّ خبرة في مجال الضيافة</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="advantages">
        <h2>مزايا العمل معنا</h2>
        <ul>
          <li>
            <svg
              width="150"
              height="50"
              viewBox="0 0 150 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M24.25 40.4C32.0703 40.4 38.41 34.0603 38.41 26.24C38.41 18.4196 32.0703 12.08 24.25 12.08C16.4296 12.08 10.09 18.4196 10.09 26.24C10.09 34.0603 16.4296 40.4 24.25 40.4Z"
                fill="#031E55"
              ></path>
              <path
                d="M7.53999 42.44C4.89247 39.7015 2.95769 36.3549 1.90547 32.6941C0.853258 29.0333 0.715791 25.1701 1.50514 21.4437C2.29448 17.7174 3.98651 14.2418 6.43268 11.322C8.87885 8.40221 12.0044 6.12756 15.5349 4.69771C19.0653 3.26786 22.8929 2.72654 26.6814 3.12126C30.4699 3.51598 34.1037 4.83467 37.2636 6.96158C40.4235 9.08849 43.013 11.9586 44.8048 15.3199C46.5965 18.6812 47.5357 22.431 47.54 26.24"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M24.25 49.5C20.413 49.512 16.6331 48.5705 13.25 46.76"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M88.36 12.09H60.04V40.41H88.36V12.09Z"
                fill="#FF870A"
              ></path>
              <path
                d="M123.3 12.09L106.96 40.41H139.65L123.3 12.09Z"
                fill="#BED1F8"
              ></path>
              <path
                d="M141.54 8.93997L144.75 5.83997"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M144.59 16.91L149.04 16.99"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M133.76 5.46L133.83 1"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <br />
            <h3>اعرض أيّ نوع من العقارات</h3>
            <p>
              يمكنك عرض كل أنواع الأماكن مجاناً، من الشقق إلى الفيلات وغيرها
              الكثير.
            </p>
          </li>

          <li>
            <svg
              width="95"
              height="88"
              viewBox="0 0 95 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <g clip-path="url(#clip-svg-alongside-other-ota)">
                <path
                  d="M43.34 1.91003C41.9752 2.38443 40.6396 2.93872 39.34 3.57003"
                  stroke="#031E55"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M44.2599 48.21C40.34 48.38 37.5099 50.11 36.8499 54.3C36.6236 55.5344 36.7612 56.8081 37.2459 57.9657C37.7306 59.1234 38.5416 60.1151 39.58 60.82C42.7 63.11 45.8299 62.82 48.6899 60.45L53.83 74.59H54.2299C53.9199 74.74 53.6199 74.91 53.2999 75.03L19.2999 87.59C18.0099 88.06 17.2999 87.72 16.7999 86.39C15.4 82.63 14.01 78.8666 12.63 75.1C12.5062 74.6589 12.4061 74.2116 12.33 73.76C8.87995 76.42 5.50995 77 2.26995 74C1.27403 73.1196 0.559764 71.9651 0.216487 70.6809C-0.12679 69.3968 -0.0838456 68.0399 0.339951 66.78C1.33995 63.2 4.09995 61.92 7.69995 61.78C7.55995 61.36 7.45995 61 7.32995 60.64L3.15995 49.38C2.60995 47.88 2.91995 47.22 4.39995 46.67L14.22 43C14.58 42.87 14.93 42.71 15.42 42.5C13.42 39.84 12.68 37.04 14.22 34.04C14.6764 33.168 15.3156 32.4049 16.0939 31.8025C16.8722 31.2002 17.7714 30.773 18.7299 30.55C22.1299 29.64 27.52 31.65 27.59 38.05L39 33.92L44.2599 48.21Z"
                  fill="#BED1F8"
                ></path>
                <path
                  d="M82.16 64.52C84.79 67.83 85.0699 71.15 82.4299 74.35C81.5745 75.4438 80.3968 76.2409 79.0634 76.6286C77.73 77.0162 76.3085 76.9747 74.9999 76.51C71.4499 75.51 69.9999 72.82 69.9999 69.11C69.5799 69.24 69.2399 69.32 68.9199 69.44L59.5499 73C57.9699 73.58 58.2299 73.6 57.6999 72.19C55.8999 67.3967 54.1066 62.5967 52.3199 57.79C52.2381 57.5378 52.1412 57.2907 52.0299 57.05C51.9426 56.8166 51.7984 56.6087 51.6105 56.445C51.4226 56.2812 51.1969 56.1669 50.9537 56.1123C50.7105 56.0578 50.4576 56.0646 50.2178 56.1323C49.9779 56.2 49.7587 56.3264 49.5799 56.5C48.9299 57.01 48.3299 57.57 47.6999 58.09C47.029 58.6936 46.1856 59.0714 45.2885 59.1701C44.3914 59.2688 43.486 59.0834 42.6999 58.64C41.821 58.0955 41.1619 57.2589 40.8382 56.277C40.5146 55.295 40.547 54.2304 40.9299 53.27C41.2237 52.5629 41.7185 51.9575 42.3532 51.5291C42.9878 51.1007 43.7343 50.868 44.4999 50.86C45.3199 50.78 46.1399 50.78 46.9599 50.75C48.8399 50.67 49.3899 49.84 48.7199 48.04L44.3499 36.46C43.9299 35.35 43.5499 34.23 43.0899 33.13C42.8299 32.52 42.9199 32.21 43.5899 31.96C55.1033 27.6734 66.6133 23.3534 78.1199 19C78.3412 18.8794 78.5873 18.8117 78.8391 18.8022C79.0909 18.7927 79.3415 18.8417 79.5711 18.9454C79.8008 19.0491 80.0033 19.2046 80.1627 19.3997C80.3221 19.5949 80.4341 19.8243 80.4899 20.07C82.3099 24.87 84.1066 29.6834 85.8799 34.51C86.3899 35.9 85.7499 36.76 84.2699 36.84C83.3499 36.84 82.4299 36.9 81.5099 36.97C80.6613 36.978 79.8389 37.2654 79.1701 37.7878C78.5012 38.3103 78.0232 39.0386 77.8099 39.86C77.5786 40.655 77.5892 41.5008 77.8403 42.2898C78.0914 43.0787 78.5717 43.775 79.2199 44.29C79.8683 44.838 80.6715 45.1701 81.5176 45.24C82.3636 45.3099 83.2104 45.1142 83.9399 44.68C84.804 44.0826 85.6321 43.4348 86.4199 42.74C87.6499 41.74 88.6599 41.96 89.2099 43.4C91.0433 48.2134 92.8433 53.0267 94.6099 57.84C94.7245 58.0635 94.786 58.3104 94.7894 58.5615C94.7929 58.8126 94.7382 59.0611 94.6298 59.2876C94.5214 59.5141 94.3621 59.7125 94.1644 59.8673C93.9667 60.0221 93.7359 60.1291 93.4899 60.18C90.0999 61.51 86.6999 62.77 83.3099 64L82.16 64.52Z"
                  fill="#FF870A"
                ></path>
                <path
                  d="M88.45 23.46C94.41 18 93.84 7 86.59 3.12C79.34 -0.760004 69.29 0.709997 64.05 7.17C62.801 8.56817 62.0764 10.3567 62 12.23C62 14.1 63.39 16.03 65.25 16.18C67.71 16.37 70.01 9.66 65.25 5.92C61.16 2.78 56 -0.200003 48.75 0.649997"
                  stroke="#031E55"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M50.5099 65.46C49.882 65.9156 49.2124 66.3107 48.5099 66.64C45.6162 67.8887 42.3494 67.9591 39.4046 66.8361C36.4598 65.7132 34.0693 63.4856 32.7417 60.6271C31.4141 57.7687 31.2542 54.5051 32.296 51.5306C33.3378 48.5561 35.499 46.1054 38.3199 44.7C39.6472 44.0774 41.0777 43.7045 42.5399 43.6"
                  stroke="#91B0F2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip-svg-alongside-other-ota">
                  <rect width="94.78" height="87.77" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <br />
            <h3>حمّل بيانات عقارك بسهولة</h3>
            <p>
              لتوفير الوقت عليك، سهّلنا لك عملية تحميل الكثير من بيانات عقاراتك
              التي تعرضها على مواقع أخرى.
            </p>
          </li>

          <li>
            <svg
              width="126"
              height="52"
              viewBox="0 0 126 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M33.66 34.6135H2C0.89543 34.6135 0 35.509 0 36.6135V49.3235C0 50.4281 0.89543 51.3235 2 51.3235H33.66C34.7646 51.3235 35.66 50.4281 35.66 49.3235V36.6135C35.66 35.509 34.7646 34.6135 33.66 34.6135Z"
                fill="#BED1F8"
              ></path>
              <path
                d="M78.37 34.6135H46.71C45.6054 34.6135 44.71 35.509 44.71 36.6135V49.3235C44.71 50.4281 45.6054 51.3235 46.71 51.3235H78.37C79.4745 51.3235 80.37 50.4281 80.37 49.3235V36.6135C80.37 35.509 79.4745 34.6135 78.37 34.6135Z"
                fill="#031E55"
              ></path>
              <path
                d="M123.19 34.6135H91.53C90.4255 34.6135 89.53 35.509 89.53 36.6135V49.3235C89.53 50.4281 90.4255 51.3235 91.53 51.3235H123.19C124.295 51.3235 125.19 50.4281 125.19 49.3235V36.6135C125.19 35.509 124.295 34.6135 123.19 34.6135Z"
                fill="#FF870A"
              ></path>
              <path
                d="M93.15 4.67358C97.83 7.67358 101.09 11.8836 102.05 16.6736"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20.62 15.8636C32.06 -4.37636 55.74 2.11364 58.58 3.48364C62.28 5.23364 65.79 7.77364 67.15 11.6236C67.58 12.8436 67.76 14.3636 66.82 15.2536C65.54 16.4736 63.19 15.2536 62.82 13.4736C62.45 11.6936 63.45 10.0236 64.57 8.64364C67.599 5.07651 71.7014 2.58577 76.2636 1.5439C80.8258 0.50203 85.6028 0.965024 89.88 2.86364"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M104.29 10.0137L102.05 16.6837L96.16 12.8337"
                stroke="#031E55"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <br />
            <h3>إرشادات مفصّلة خطوة بخطوة</h3>
            <p>
              تعرّف على كيفية عمل منصتنا وأفضل الممارسات والأمور التي يجب أن
              تعيرها انتباهك.
            </p>
          </li>

          <li>
            <svg
              width="90"
              height="77"
              viewBox="0 0 90 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M1.81013 54C0.894162 53.3486 0.2743 52.3602 0.0867848 51.252C-0.10073 50.1438 0.159448 49.0064 0.810134 48.09L29.5001 7.08998C29.8676 6.5655 30.3492 6.13108 30.9086 5.81933C31.468 5.50758 32.0908 5.3266 32.7301 5.28998L57.3801 3.83998C58.3191 3.78952 59.2474 4.05863 60.0137 4.60344C60.7801 5.14824 61.3393 5.93661 61.6001 6.83998L68.6601 30.5C68.8423 31.1136 68.8839 31.7604 68.7818 32.3923C68.6796 33.0242 68.4364 33.625 68.0701 34.15L39.3801 75.15C38.7269 76.0666 37.7368 76.6867 36.6269 76.8742C35.5171 77.0616 34.3782 76.8012 33.4601 76.15L1.81013 54Z"
                fill="#C4D1F4"
              ></path>
              <path
                d="M52.0901 19.6301C54.1612 19.6301 55.8401 17.9512 55.8401 15.8801C55.8401 13.8091 54.1612 12.1301 52.0901 12.1301C50.019 12.1301 48.3401 13.8091 48.3401 15.8801C48.3401 17.9512 50.019 19.6301 52.0901 19.6301Z"
                fill="white"
              ></path>
              <path
                d="M54.2602 12.8C48.2202 10 62.5302 0.230048 74.7702 0.510048C84.1602 0.720048 87.7702 7.44005 88.3802 9.06005C89.6502 12.19 86.8002 17.35 73.0502 11.24C65.3302 7.80005 62.8902 10.24 62.8902 10.24"
                stroke="#042D81"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M34.8801 40.4601C31.2697 37.9279 27.181 36.1581 22.8638 35.2589C18.5465 34.3597 14.0913 34.3499 9.77009 35.2301L0.770095 48.0801C0.119409 48.9966 -0.140769 50.1339 0.0467458 51.2421C0.23426 52.3503 0.854123 53.3387 1.77009 53.9901L33.4601 76.1601C34.3781 76.8113 35.517 77.0718 36.6269 76.8843C37.7367 76.6968 38.7269 76.0767 39.3801 75.1601L48.3801 62.3001C47.7339 57.9328 46.2033 53.7434 43.882 49.9881C41.5608 46.2328 38.4976 42.9907 34.8801 40.4601Z"
                fill="#FF870A"
              ></path>
              <path
                d="M49.2701 45.0891C50.1737 36.0537 43.5994 27.9984 34.5861 27.0971C25.5729 26.1957 17.5337 32.7897 16.6301 41.8251C15.7266 50.8604 22.3009 58.9157 31.3141 59.8171C40.3274 60.7184 48.3666 54.1244 49.2701 45.0891Z"
                fill="white"
              ></path>
              <path
                d="M22.3701 46.3801C22.2209 46.2769 22.0936 46.1451 21.9958 45.9923C21.8979 45.8395 21.8314 45.6688 21.8001 45.4901C21.7388 45.1324 21.821 44.7649 22.0287 44.4673C22.2365 44.1697 22.5531 43.9659 22.9101 43.9001L42.0001 40.5401C42.3494 40.4782 42.709 40.5573 43.0001 40.7601C43.2961 40.972 43.4971 41.2916 43.5601 41.6501C43.6158 42.0007 43.5334 42.3592 43.3301 42.6501C43.1224 42.9477 42.8066 43.1523 42.4501 43.2201L23.3901 46.6001C23.2141 46.6353 23.0327 46.6339 22.8572 46.5961C22.6818 46.5582 22.5159 46.4847 22.3701 46.3801Z"
                fill="#031E55"
              ></path>
              <path
                d="M28.0001 33.5699C27.5333 34.2351 27.2742 35.0238 27.2555 35.8362C27.2368 36.6486 27.4593 37.4483 27.895 38.1343C28.3307 38.8203 28.9599 39.3617 29.7032 39.6901C30.4465 40.0186 31.2705 40.1193 32.071 39.9796C32.8715 39.8399 33.6127 39.466 34.2008 38.9052C34.7889 38.3444 35.1975 37.6219 35.3751 36.8289C35.5526 36.0359 35.4911 35.208 35.1984 34.45C34.9056 33.6919 34.3946 33.0377 33.7301 32.5699C32.8362 31.9472 31.7324 31.7028 30.6592 31.8901C29.586 32.0774 28.6302 32.6812 28.0001 33.5699ZM30.2501 35.1499C30.4054 34.9281 30.6229 34.7572 30.8752 34.6589C31.1276 34.5605 31.4034 34.5392 31.6678 34.5976C31.9323 34.6559 32.1735 34.7913 32.361 34.9867C32.5485 35.1821 32.6739 35.4287 32.7214 35.6953C32.7689 35.9619 32.7362 36.2366 32.6277 36.4847C32.5191 36.7328 32.3394 36.9431 32.1113 37.0891C31.8833 37.2352 31.6171 37.3103 31.3463 37.3051C31.0755 37.2999 30.8124 37.2146 30.5901 37.0599C30.2903 36.8534 30.0843 36.5368 30.0168 36.1791C29.9494 35.8213 30.0261 35.4514 30.2301 35.1499H30.2501Z"
                fill="#031E55"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
              <path
                d="M30.68 48.85C30.2133 49.5151 29.9541 50.3038 29.9354 51.1162C29.9167 51.9286 30.1392 52.7283 30.5749 53.4143C31.0106 54.1003 31.6398 54.6417 32.3831 54.9702C33.1264 55.2986 33.9504 55.3993 34.7509 55.2596C35.5515 55.1199 36.2926 54.746 36.8807 54.1852C37.4688 53.6244 37.8775 52.9019 38.055 52.1089C38.2326 51.3159 38.1711 50.488 37.8783 49.73C37.5855 48.9719 37.0746 48.3177 36.41 47.85C35.517 47.2246 34.4125 46.9787 33.3384 47.1661C32.2644 47.3535 31.3085 47.959 30.68 48.85ZM32.92 50.42C33.0753 50.1981 33.2928 50.0272 33.5452 49.9289C33.7975 49.8306 34.0733 49.8092 34.3378 49.8676C34.6022 49.9259 34.8434 50.0614 35.0309 50.2567C35.2185 50.4521 35.3439 50.6987 35.3913 50.9653C35.4388 51.2319 35.4062 51.5066 35.2976 51.7547C35.189 52.0028 35.0093 52.2131 34.7813 52.3592C34.5532 52.5052 34.287 52.5803 34.0162 52.5752C33.7455 52.57 33.4823 52.4846 33.26 52.33C33.1121 52.227 32.986 52.0959 32.8888 51.9442C32.7916 51.7924 32.7253 51.6229 32.6937 51.4455C32.6622 51.2681 32.6659 51.0862 32.7047 50.9102C32.7436 50.7342 32.8167 50.5676 32.92 50.42Z"
                fill="#031E55"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <br />
            <h3>خصومات حصرية</h3>
            <p>
              خصومات على خدمات ومنتجات تتيح لك توفير الوقت وتحسين تجربة الضيوف.
            </p>
          </li>
        </ul>
      </div>
      <div className="guests">
        <h2>تعرّف على ضيوفك</h2>
        <span>
          هناك بعض الأمور المشتركة بين ضيوفنا، بغض النظر عن اختلافاتهم.
        </span>
        <div className="row">
          <div>
            <IoMdCheckmarkCircleOutline />
            <span>
              يتم حجز 75% من الليالي على موقعنا من قِبل ضيوف أجروا 5 حجوزات أو
              أكثر سابقاً
            </span>
            <br />
            <br />
            <IoMdCheckmarkCircleOutline />
            <span>
              يتم حجز 68% من الليالي على موقعنا من قِبل العائلات والأزواج
            </span>
            <br /> <br />
            <IoMdCheckmarkCircleOutline />
            <span>يتم حجز 42% من الليالي في أماكن إقامة أخرى غير الفنادق</span>
          </div>
          <div>
            <img src={guests} alt="guests" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
