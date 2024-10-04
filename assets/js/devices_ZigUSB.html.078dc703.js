"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89932],{21468:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>a});var n=o(73037);const i={},d=(0,o(94533).A)(i,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"xyzroe-zigusb",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#xyzroe-zigusb"},[(0,n.Lk)("span",null,"xyzroe ZigUSB")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZigUSB")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=xyzroe"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("xyzroe")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee USB power monitor and switch")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"switch (state), restart, button_mode, link_to_output, bind_command, action, current, voltage, power, interval, cpu_temperature, uptime, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZigUSB.png",alt:"xyzroe ZigUSB"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://xyzroe.cc/ZigUSB" target="_blank" rel="noopener noreferrer">xyzroe ZigUSB</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="restart-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#restart-numeric-l1-endpoint"><span>Restart (numeric, l1 endpoint)</span></a></h3><p>OFF time. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;restart_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>30</code>. The unit of this value is <code>seconds</code>.</p><h3 id="button-mode-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#button-mode-enum-l1-endpoint"><span>Button mode (enum, l1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>button_mode_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;button_mode_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;button_mode_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>single_click</code>, <code>multi_click</code>.</p><h3 id="link-to-output-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#link-to-output-enum-l1-endpoint"><span>Link to output (enum, l1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>link_to_output_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;link_to_output_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;link_to_output_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>no</code>, <code>yes</code>.</p><h3 id="bind-command-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#bind-command-enum-l1-endpoint"><span>Bind command (enum, l1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>bind_command_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;bind_command_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bind_command_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>on/off</code>, <code>toggle</code>, <code>change_level_up</code>, <code>change_level_down</code>, <code>change_level_up_with_off</code>, <code>change_level_down_with_off</code>, <code>recall_scene_0</code>, <code>recall_scene_1</code>, <code>recall_scene_2</code>, <code>recall_scene_3</code>, <code>recall_scene_4</code>, <code>recall_scene_5</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Single click works only with NO link to output. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>.</p><h3 id="current-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-l2-endpoint"><span>Current (numeric, l2 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-l2-endpoint"><span>Voltage (numeric, l2 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-l2-endpoint"><span>Power (numeric, l2 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="interval-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#interval-numeric-l2-endpoint"><span>Interval (numeric, l2 endpoint)</span></a></h3><p>Reporting interval. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;interval_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>3600</code>. The unit of this value is <code>sec</code>.</p><h3 id="cpu-temperature-numeric-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#cpu-temperature-numeric-l4-endpoint"><span>CPU temperature (numeric, l4 endpoint)</span></a></h3><p>Temperature of the CPU. Value can be found in the published state on the <code>temperature_l4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="uptime-numeric-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#uptime-numeric-l5-endpoint"><span>Uptime (numeric, l5 endpoint)</span></a></h3><p>CC2530. Value can be found in the published state on the <code>uptime_l5</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>seconds</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30))])}]]),a=JSON.parse('{"path":"/devices/ZigUSB.html","title":"xyzroe ZigUSB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"xyzroe ZigUSB control via MQTT","description":"Integrate your xyzroe ZigUSB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-02-29T20:20:58.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Restart (numeric, l1 endpoint)","slug":"restart-numeric-l1-endpoint","link":"#restart-numeric-l1-endpoint","children":[]},{"level":3,"title":"Button mode (enum, l1 endpoint)","slug":"button-mode-enum-l1-endpoint","link":"#button-mode-enum-l1-endpoint","children":[]},{"level":3,"title":"Link to output (enum, l1 endpoint)","slug":"link-to-output-enum-l1-endpoint","link":"#link-to-output-enum-l1-endpoint","children":[]},{"level":3,"title":"Bind command (enum, l1 endpoint)","slug":"bind-command-enum-l1-endpoint","link":"#bind-command-enum-l1-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Current (numeric, l2 endpoint)","slug":"current-numeric-l2-endpoint","link":"#current-numeric-l2-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, l2 endpoint)","slug":"voltage-numeric-l2-endpoint","link":"#voltage-numeric-l2-endpoint","children":[]},{"level":3,"title":"Power (numeric, l2 endpoint)","slug":"power-numeric-l2-endpoint","link":"#power-numeric-l2-endpoint","children":[]},{"level":3,"title":"Interval (numeric, l2 endpoint)","slug":"interval-numeric-l2-endpoint","link":"#interval-numeric-l2-endpoint","children":[]},{"level":3,"title":"CPU temperature (numeric, l4 endpoint)","slug":"cpu-temperature-numeric-l4-endpoint","link":"#cpu-temperature-numeric-l4-endpoint","children":[]},{"level":3,"title":"Uptime (numeric, l5 endpoint)","slug":"uptime-numeric-l5-endpoint","link":"#uptime-numeric-l5-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728056453000},"filePathRelative":"devices/ZigUSB.md"}')}}]);