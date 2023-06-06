import Common from "./common/Common";
import Preffered from "./preffered/Preffered";
import Blue from "./bluechip/Blue";
import Growth from "./growth/Growth";
import Value from "./value/Value";
import Divident from "./divident/Divident";

const StocksLayout = () => {
  return (
    <div>
      <Common />
      <Preffered />
      <Blue />
      <Growth />
      <Value />
      <Divident />
    </div>
  );
};

export default StocksLayout;
