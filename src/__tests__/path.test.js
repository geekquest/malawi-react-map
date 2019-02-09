import React from "react";
import { shallow, mount, render } from "enzyme";
import toJSON from "enzyme-to-json";
import { Path } from "../components";

const district = {
  name: "Mzimba",
  boundary:
    "M38.6773642,98.5652627 C39.0375962,100.347373 39.3392704,101.542334 39.5823867,102.150145 C39.9470611,103.061862 42.6760614,104.943068 43.7155652,107.328577 C44.7550689,109.714086 45.9747897,111.181859 43.7155652,113.961543 C41.4563406,116.741226 40.4874092,119.446889 39.5823867,120.562614 C38.6773642,121.678338 38.1467084,121.391283 37.9431692,123.381413 C37.73963,125.371544 37.3955518,128.706081 36.141605,126.774926 C34.8876581,124.843771 34.6193014,124.062643 34.8876581,126.774926 C35.1560148,129.487208 35.9986429,129.859718 34.8876581,132.037608 C33.7766733,134.215498 33.6337112,134.015703 34.8876581,134.215498 C36.141605,134.415294 38.6773642,134.340671 38.6773642,135.149482 C38.6773642,135.958292 39.5823867,138.884211 39.5823867,142.609311 C39.5823867,146.334412 39.6685985,146.878433 39.5823867,148.787321 C39.4961749,150.69621 38.6715276,150.141356 39.4961749,152.106212 C40.3208221,154.071067 41.0592574,153.430157 40.3208221,156.413848 C39.5823867,159.397539 36.141605,165.361913 36.141605,166.32057 C36.141605,167.279226 36.141605,169.714684 36.141605,170.374851 C36.141605,171.035018 39.409963,171.215556 39.4961749,173.13287 C39.5823867,175.050183 39.9888593,177.486243 41.8522122,179.473364 C43.7155652,181.460486 45.1033875,180.404338 46.8801151,180.404338 C48.6568427,180.404338 53.1153204,180.395311 53.1153204,181.536312 C53.1153204,182.677312 52.5113663,183.70698 54.163305,184.023523 C55.8152437,184.340067 57.2412297,185.425702 56.7202662,186.387367 C56.1993028,187.349033 56.7002758,187.161274 56.1993028,188.627242 C55.6983298,190.093211 55.1973569,191.73069 55.6983298,192.563572 C56.1993028,193.396454 57.2412297,194.785393 56.7202662,196.721964 C56.1993028,198.658535 55.6783394,199.583491 56.1993028,199.783286 C56.7202662,199.983082 58.1195982,200.626399 58.3709934,201.459281 C58.6223885,202.292163 60.0483745,204.232344 60.6686844,204.232344 C61.0822244,204.232344 62.1283916,204.232344 63.8071862,204.232344 C63.4530118,204.65721 64.1351105,204.65721 65.8534821,204.232344 C68.4310395,203.595045 68.9144451,204.340065 70.0629878,204.869644 C71.2115304,205.399222 71.5259258,204.233548 72.1631973,202.846414 C72.8004689,201.459281 74.4124266,199.783286 74.6680622,199.783286 C74.9236977,199.783286 78.026459,197.943604 78.8230484,197.943604 C79.6196378,197.943604 82.0512044,195.327007 83.0065059,195.426905 C83.9618075,195.526802 84.6118002,195.505138 85.6010249,194.034355 C86.5902497,192.563572 87.5794744,191.381048 86.5902497,191.430997 C85.6010249,191.480946 82.0312139,192.153149 80.8984213,191.381048 C79.7656288,190.608947 78.1264113,191.050062 77.0420804,189.838652 C75.9577495,188.627242 75.320478,188.751212 74.6680622,186.387367 C74.0156463,184.023523 72.9234405,182.668285 72.1631973,181.536312 C71.4029542,180.404338 71.0261643,179.473364 70.0629878,179.473364 C69.0998112,179.473364 68.6515403,180.512059 67.793768,179.473364 C66.9359956,178.434669 65.8534821,176.174935 65.8534821,175.276458 C65.8534821,174.37798 66.579802,173.100975 67.793768,172.393266 C69.0077339,171.685557 70.0629878,170.374851 70.0629878,170.374851 C70.0629878,170.374851 69.1022343,170.374851 67.793768,170.374851 C66.4853017,170.374851 66.1684832,168.35102 64.9878347,168.140994 C63.8071862,167.930968 62.6265377,165.24336 63.8071862,164.932232 C64.9878347,164.621105 66.3738397,163.277301 67.0838039,163.277301 C67.793768,163.277301 70.0629878,162.126672 70.0629878,161.259488 C70.0629878,160.392304 69.3499948,159.445683 69.1422152,158.4112 C68.9344356,157.376717 68.726656,153.68291 68.9344356,152.894561 C69.1422152,152.106212 70.9837603,150.051087 70.0629878,148.787321 C69.1422152,147.523556 67.0838039,146.597997 67.0838039,144.603654 C67.0838039,142.609311 66.6531004,141.252869 67.793768,138.201175 C68.9344356,135.149482 69.3293986,133.663654 70.7462979,132.850631 C72.1631973,132.037608 73.7757609,132.037608 75.4089206,132.037608 C77.0420804,132.037608 78.9708566,133.492745 79.934639,131.024188 C80.8984213,128.555632 80.4119869,126.774926 83.0065059,126.774926 C85.6010249,126.774926 86.5902497,127.207615 86.5902497,125.294514 C86.5902497,123.381413 83.0065059,116.971713 83.0065059,116.407833 C83.0065059,115.843952 82.1578201,109.059334 83.0065059,108.193956 C83.8551917,107.328577 84.7038775,105.308357 83.8551917,103.729251 C83.0065059,102.150145 80.6040164,100.4236 78.8230484,98.5652627 C77.6357364,97.3263709 77.0420804,98.1239476 77.0420804,100.957993 C77.1293115,100.957993 76.3379721,100.957993 74.6680622,100.957993 C72.9981523,100.957993 71.1562033,100.957993 69.1422152,100.957993 L67.0838039,100.957993 C67.9040184,103.236784 67.9040184,104.512184 67.0838039,104.784195 C65.8534821,105.192211 65.3137397,106.65517 63.8071862,105.192211 C62.3006326,103.729251 61.9141505,103.729251 60.6686844,103.729251 C59.4232184,103.729251 57.7422026,103.799059 56.7202662,102.974602 C55.6983298,102.150145 55.2112896,101.325689 54.163305,102.150145 C53.1153204,102.974602 52.4701739,104.376179 51.5257762,104.784195 C50.5813786,105.192211 50.0858575,106.436117 48.8016221,106.436117 C47.5173867,106.436117 46.8801151,107.409819 46.8801151,105.192211 C46.8801151,102.974602 47.9359747,100.957993 46.8801151,100.957993 C45.8242555,100.957993 43.6501418,100.102243 42.751177,100.051692 C42.1518672,100.017992 40.7939296,99.5225153 38.6773642,98.5652627 Z"
};
let selectedDistricts = ["Mzimba"];
describe("Test Path Component", () => {
  it("Renders path component and matches the snapshot", () => {
    const wrapper = shallow(
      <Path
        district={district}
        selectedDistricts={selectedDistricts}
        onClick={district => console.log(district)}
        selectedColor="9D9D9D"
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it("Changes color on deselect", () => {
    selectedDistricts = [];
    const wrapper = shallow(
      <Path
        district={district}
        selectedDistricts={selectedDistricts}
        onClick={district => console.log(district)}
        selectedColor="9D9D9D"
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
