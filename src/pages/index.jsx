import { Connector } from "mqtt-react-hooks";
import MqttExample from "@/components/mqttExample/mqttExample";
import styleContent from "./index.style";
const HomePage = () => {
  return (
    
    <center>
    <div>
    {/* <Connector brokerUrl="ws://broker.hivemq.com:8000/planta"> */}
    <Connector brokerUrl="ws://broker.hivemq.com:8000/mqtt">
        <MqttExample></MqttExample>
      </Connector>
    </div>
    </center>
  );
};
export default HomePage;
