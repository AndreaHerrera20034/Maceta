import React from "react";
import { useMqttState, useSubscription } from "mqtt-react-hooks";
import Maceta from "../maceta";

const MqttExample= () =>{
  /*
 * Status list
 * - Offline
 * - Connected
 * - Reconnecting
 * - Closed
 * - Error: printed in console too
 */
const { connectionStatus, client  } = useMqttState();
function handlePublish() {
  return client.publish('Andrea Herrera', "0")
};

const {message}= useSubscription(['Andrea Herrera'])

var dato=parseInt(message?.message)

return <main>
<h2>{`Status: ${connectionStatus}`}</h2>
<Maceta water={dato} ></Maceta>
  
  <p>Humedad: {message?.message}%</p>
  <button type='button' onClick={handlePublish}>Reiniciar</button>
</main> 
}
export default MqttExample;