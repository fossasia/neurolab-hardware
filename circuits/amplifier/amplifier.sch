<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE eagle SYSTEM "eagle.dtd">
<eagle version="7.1.0">
<drawing>
<settings>
<setting alwaysvectorfont="no"/>
<setting verticaltext="up"/>
</settings>
<grid distance="0.1" unitdist="inch" unit="inch" style="lines" multiple="1" display="no" altdistance="0.01" altunitdist="inch" altunit="inch"/>
<layers>
<layer number="1" name="Top" color="4" fill="1" visible="no" active="no"/>
<layer number="16" name="Bottom" color="1" fill="1" visible="no" active="no"/>
<layer number="17" name="Pads" color="2" fill="1" visible="no" active="no"/>
<layer number="18" name="Vias" color="2" fill="1" visible="no" active="no"/>
<layer number="19" name="Unrouted" color="6" fill="1" visible="no" active="no"/>
<layer number="20" name="Dimension" color="15" fill="1" visible="no" active="no"/>
<layer number="21" name="tPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="22" name="bPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="23" name="tOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="24" name="bOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="25" name="tNames" color="7" fill="1" visible="no" active="no"/>
<layer number="26" name="bNames" color="7" fill="1" visible="no" active="no"/>
<layer number="27" name="tValues" color="7" fill="1" visible="no" active="no"/>
<layer number="28" name="bValues" color="7" fill="1" visible="no" active="no"/>
<layer number="29" name="tStop" color="7" fill="3" visible="no" active="no"/>
<layer number="30" name="bStop" color="7" fill="6" visible="no" active="no"/>
<layer number="31" name="tCream" color="7" fill="4" visible="no" active="no"/>
<layer number="32" name="bCream" color="7" fill="5" visible="no" active="no"/>
<layer number="33" name="tFinish" color="6" fill="3" visible="no" active="no"/>
<layer number="34" name="bFinish" color="6" fill="6" visible="no" active="no"/>
<layer number="35" name="tGlue" color="7" fill="4" visible="no" active="no"/>
<layer number="36" name="bGlue" color="7" fill="5" visible="no" active="no"/>
<layer number="37" name="tTest" color="7" fill="1" visible="no" active="no"/>
<layer number="38" name="bTest" color="7" fill="1" visible="no" active="no"/>
<layer number="39" name="tKeepout" color="4" fill="11" visible="no" active="no"/>
<layer number="40" name="bKeepout" color="1" fill="11" visible="no" active="no"/>
<layer number="41" name="tRestrict" color="4" fill="10" visible="no" active="no"/>
<layer number="42" name="bRestrict" color="1" fill="10" visible="no" active="no"/>
<layer number="43" name="vRestrict" color="2" fill="10" visible="no" active="no"/>
<layer number="44" name="Drills" color="7" fill="1" visible="no" active="no"/>
<layer number="45" name="Holes" color="7" fill="1" visible="no" active="no"/>
<layer number="46" name="Milling" color="3" fill="1" visible="no" active="no"/>
<layer number="47" name="Measures" color="7" fill="1" visible="no" active="no"/>
<layer number="48" name="Document" color="7" fill="1" visible="no" active="no"/>
<layer number="49" name="Reference" color="7" fill="1" visible="no" active="no"/>
<layer number="51" name="tDocu" color="6" fill="1" visible="no" active="no"/>
<layer number="52" name="bDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="91" name="Nets" color="2" fill="1" visible="yes" active="yes"/>
<layer number="92" name="Busses" color="1" fill="1" visible="yes" active="yes"/>
<layer number="93" name="Pins" color="2" fill="1" visible="no" active="yes"/>
<layer number="94" name="Symbols" color="4" fill="1" visible="yes" active="yes"/>
<layer number="95" name="Names" color="7" fill="1" visible="yes" active="yes"/>
<layer number="96" name="Values" color="7" fill="1" visible="yes" active="yes"/>
<layer number="97" name="Info" color="7" fill="1" visible="yes" active="yes"/>
<layer number="98" name="Guide" color="6" fill="1" visible="yes" active="yes"/>
</layers>
<schematic xreflabel="%F%N/%S.%C%R" xrefpart="/%S.%C%R">
<libraries>
<library name="linear">
<description>&lt;b&gt;Linear Devices&lt;/b&gt;&lt;p&gt;
Operational amplifiers,  comparators, voltage regulators, ADCs, DACs, etc.&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="DIL08">
<description>&lt;b&gt;Dual In Line Package&lt;/b&gt;</description>
<wire x1="5.08" y1="2.921" x2="-5.08" y2="2.921" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="-2.921" x2="5.08" y2="-2.921" width="0.1524" layer="21"/>
<wire x1="5.08" y1="2.921" x2="5.08" y2="-2.921" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="2.921" x2="-5.08" y2="1.016" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="-2.921" x2="-5.08" y2="-1.016" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="1.016" x2="-5.08" y2="-1.016" width="0.1524" layer="21" curve="-180"/>
<pad name="1" x="-3.81" y="-3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="2" x="-1.27" y="-3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="7" x="-1.27" y="3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="8" x="-3.81" y="3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="3" x="1.27" y="-3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="4" x="3.81" y="-3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="6" x="1.27" y="3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<pad name="5" x="3.81" y="3.81" drill="0.8128" diameter="1.27" rot="R90"/>
<text x="-5.334" y="-2.921" size="1.27" layer="25" ratio="10" rot="R90">&gt;NAME</text>
<text x="-3.556" y="-0.635" size="1.27" layer="27" ratio="10">&gt;VALUE</text>
</package>
<package name="SOIC8">
<description>&lt;b&gt;SOIC-8&lt;/b&gt; CASE 751-07&lt;p&gt;
Source: http://www.onsemi.com/pub/Collateral/MC34164-D.PDF&lt;p&gt;
&lt;b&gt;D (R-PDSO-G8)&lt;/b&gt;PLATIC SMALL-OUTLINE PACKAGE&lt;br&gt;
Source: http://focus.ti.com/lit/ds/symlink/tlc27l2.pdf</description>
<wire x1="2.4" y1="1.9" x2="2.4" y2="-1.4" width="0.2032" layer="21"/>
<wire x1="2.4" y1="-1.4" x2="2.4" y2="-1.9" width="0.2032" layer="21"/>
<wire x1="2.4" y1="-1.9" x2="-2.4" y2="-1.9" width="0.2032" layer="51"/>
<wire x1="-2.4" y1="-1.9" x2="-2.4" y2="-1.4" width="0.2032" layer="21"/>
<wire x1="-2.4" y1="-1.4" x2="-2.4" y2="1.9" width="0.2032" layer="21"/>
<wire x1="-2.4" y1="1.9" x2="2.4" y2="1.9" width="0.2032" layer="51"/>
<wire x1="2.4" y1="-1.4" x2="-2.4" y2="-1.4" width="0.2032" layer="21"/>
<smd name="2" x="-0.635" y="-2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="7" x="-0.635" y="2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="1" x="-1.905" y="-2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="3" x="0.635" y="-2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="4" x="1.905" y="-2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="8" x="-1.905" y="2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="6" x="0.635" y="2.75" dx="0.6" dy="1.5" layer="1"/>
<smd name="5" x="1.905" y="2.75" dx="0.6" dy="1.5" layer="1"/>
<text x="-2.667" y="-1.905" size="1.27" layer="25" rot="R90">&gt;NAME</text>
<text x="3.937" y="-1.905" size="1.27" layer="27" rot="R90">&gt;VALUE</text>
<rectangle x1="-2.15" y1="-3.1" x2="-1.66" y2="-2" layer="51"/>
<rectangle x1="-0.88" y1="-3.1" x2="-0.39" y2="-2" layer="51"/>
<rectangle x1="0.39" y1="-3.1" x2="0.88" y2="-2" layer="51"/>
<rectangle x1="1.66" y1="-3.1" x2="2.15" y2="-2" layer="51"/>
<rectangle x1="1.66" y1="2" x2="2.15" y2="3.1" layer="51"/>
<rectangle x1="0.39" y1="2" x2="0.88" y2="3.1" layer="51"/>
<rectangle x1="-0.88" y1="2" x2="-0.39" y2="3.1" layer="51"/>
<rectangle x1="-2.15" y1="2" x2="-1.66" y2="3.1" layer="51"/>
</package>
<package name="SO08">
<description>&lt;b&gt;Small Outline Package 8&lt;/b&gt;&lt;br&gt;
NS Package M08A</description>
<wire x1="2.4" y1="1.9" x2="2.4" y2="-1.4" width="0.2032" layer="51"/>
<wire x1="2.4" y1="-1.4" x2="2.4" y2="-1.9" width="0.2032" layer="51"/>
<wire x1="2.4" y1="-1.9" x2="-2.4" y2="-1.9" width="0.2032" layer="51"/>
<wire x1="-2.4" y1="-1.9" x2="-2.4" y2="-1.4" width="0.2032" layer="51"/>
<wire x1="-2.4" y1="-1.4" x2="-2.4" y2="1.9" width="0.2032" layer="51"/>
<wire x1="-2.4" y1="1.9" x2="2.4" y2="1.9" width="0.2032" layer="51"/>
<wire x1="2.4" y1="-1.4" x2="-2.4" y2="-1.4" width="0.2032" layer="51"/>
<smd name="2" x="-0.635" y="-2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="7" x="-0.635" y="2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="1" x="-1.905" y="-2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="3" x="0.635" y="-2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="4" x="1.905" y="-2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="8" x="-1.905" y="2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="6" x="0.635" y="2.6" dx="0.6" dy="2.2" layer="1"/>
<smd name="5" x="1.905" y="2.6" dx="0.6" dy="2.2" layer="1"/>
<text x="-2.667" y="-1.905" size="1.27" layer="25" rot="R90">&gt;NAME</text>
<text x="3.937" y="-1.905" size="1.27" layer="27" rot="R90">&gt;VALUE</text>
<rectangle x1="-2.15" y1="-3.1" x2="-1.66" y2="-2" layer="51"/>
<rectangle x1="-0.88" y1="-3.1" x2="-0.39" y2="-2" layer="51"/>
<rectangle x1="0.39" y1="-3.1" x2="0.88" y2="-2" layer="51"/>
<rectangle x1="1.66" y1="-3.1" x2="2.15" y2="-2" layer="51"/>
<rectangle x1="1.66" y1="2" x2="2.15" y2="3.1" layer="51"/>
<rectangle x1="0.39" y1="2" x2="0.88" y2="3.1" layer="51"/>
<rectangle x1="-0.88" y1="2" x2="-0.39" y2="3.1" layer="51"/>
<rectangle x1="-2.15" y1="2" x2="-1.66" y2="3.1" layer="51"/>
</package>
<package name="MSOP08">
<description>&lt;b&gt;Mini Small Outline Package&lt;/b&gt;</description>
<wire x1="1.624" y1="1.299" x2="1.624" y2="-1.301" width="0.1524" layer="21"/>
<wire x1="-1.626" y1="-1.301" x2="-1.626" y2="1.299" width="0.1524" layer="21"/>
<wire x1="1.299" y1="1.624" x2="1.624" y2="1.299" width="0.1524" layer="21" curve="-90"/>
<wire x1="-1.626" y1="1.299" x2="-1.301" y2="1.624" width="0.1524" layer="21" curve="-90"/>
<wire x1="-1.626" y1="-1.301" x2="-1.301" y2="-1.626" width="0.1524" layer="21" curve="90"/>
<wire x1="1.299" y1="-1.626" x2="1.624" y2="-1.301" width="0.1524" layer="21" curve="90"/>
<wire x1="-1.341" y1="-1.626" x2="-1.204" y2="-1.626" width="0.1524" layer="51"/>
<wire x1="-0.747" y1="-1.626" x2="-0.554" y2="-1.626" width="0.1524" layer="51"/>
<wire x1="-0.097" y1="-1.626" x2="0.096" y2="-1.626" width="0.1524" layer="51"/>
<wire x1="0.553" y1="-1.626" x2="0.746" y2="-1.626" width="0.1524" layer="51"/>
<wire x1="1.203" y1="-1.626" x2="1.299" y2="-1.626" width="0.1524" layer="51"/>
<wire x1="-1.301" y1="1.624" x2="-1.204" y2="1.624" width="0.1524" layer="51"/>
<wire x1="-0.747" y1="1.624" x2="-0.554" y2="1.624" width="0.1524" layer="51"/>
<wire x1="-0.097" y1="1.624" x2="0.096" y2="1.624" width="0.1524" layer="51"/>
<wire x1="0.553" y1="1.624" x2="0.746" y2="1.624" width="0.1524" layer="51"/>
<wire x1="1.203" y1="1.624" x2="1.299" y2="1.624" width="0.1524" layer="51"/>
<circle x="-0.9456" y="-0.7906" radius="0.5" width="0.0508" layer="21"/>
<smd name="8" x="-0.976" y="2.112" dx="0.3" dy="1.2" layer="1"/>
<smd name="7" x="-0.326" y="2.112" dx="0.3" dy="1.2" layer="1"/>
<smd name="6" x="0.324" y="2.112" dx="0.3" dy="1.2" layer="1"/>
<smd name="5" x="0.974" y="2.112" dx="0.3" dy="1.2" layer="1"/>
<smd name="4" x="0.974" y="-2.113" dx="0.3" dy="1.2" layer="1"/>
<smd name="3" x="0.324" y="-2.113" dx="0.3" dy="1.2" layer="1"/>
<smd name="2" x="-0.326" y="-2.113" dx="0.3" dy="1.2" layer="1"/>
<smd name="1" x="-0.976" y="-2.113" dx="0.3" dy="1.2" layer="1"/>
<text x="-2.032" y="-2.54" size="1.27" layer="25" ratio="10" rot="R90">&gt;NAME</text>
<text x="3.302" y="-2.54" size="1.27" layer="27" ratio="10" rot="R90">&gt;VALUE</text>
<rectangle x1="-1.0975" y1="1.6244" x2="-0.8537" y2="2.3557" layer="51"/>
<rectangle x1="-0.4475" y1="1.6244" x2="-0.2037" y2="2.3557" layer="51"/>
<rectangle x1="0.2025" y1="1.6244" x2="0.4463" y2="2.3557" layer="51"/>
<rectangle x1="0.8525" y1="1.6244" x2="1.0963" y2="2.3557" layer="51"/>
<rectangle x1="-1.0975" y1="-2.3569" x2="-0.8537" y2="-1.6256" layer="51"/>
<rectangle x1="-0.4475" y1="-2.3569" x2="-0.2037" y2="-1.6256" layer="51"/>
<rectangle x1="0.2025" y1="-2.3569" x2="0.4463" y2="-1.6256" layer="51"/>
<rectangle x1="0.8525" y1="-2.3569" x2="1.0963" y2="-1.6256" layer="51"/>
</package>
</packages>
<symbols>
<symbol name="OPAMP">
<wire x1="-5.08" y1="5.08" x2="-5.08" y2="-5.08" width="0.4064" layer="94"/>
<wire x1="-5.08" y1="-5.08" x2="5.08" y2="0" width="0.4064" layer="94"/>
<wire x1="5.08" y1="0" x2="-5.08" y2="5.08" width="0.4064" layer="94"/>
<wire x1="-3.81" y1="3.175" x2="-3.81" y2="1.905" width="0.1524" layer="94"/>
<wire x1="-4.445" y1="2.54" x2="-3.175" y2="2.54" width="0.1524" layer="94"/>
<wire x1="-4.445" y1="-2.54" x2="-3.175" y2="-2.54" width="0.1524" layer="94"/>
<text x="2.54" y="3.175" size="1.778" layer="95">&gt;NAME</text>
<text x="2.54" y="-5.08" size="1.778" layer="96">&gt;VALUE</text>
<pin name="-IN" x="-7.62" y="-2.54" visible="pad" length="short" direction="in"/>
<pin name="+IN" x="-7.62" y="2.54" visible="pad" length="short" direction="in"/>
<pin name="OUT" x="7.62" y="0" visible="pad" length="short" direction="out" rot="R180"/>
</symbol>
<symbol name="PWR+-">
<text x="1.27" y="3.175" size="0.8128" layer="93" rot="R90">V+</text>
<text x="1.27" y="-4.445" size="0.8128" layer="93" rot="R90">V-</text>
<pin name="V+" x="0" y="7.62" visible="pad" length="middle" direction="pwr" rot="R270"/>
<pin name="V-" x="0" y="-7.62" visible="pad" length="middle" direction="pwr" rot="R90"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="OPA2134" prefix="IC">
<description>&lt;b&gt;SoundPLUS (TM) High Performance AUDIO OPERATIONAL AMPLIFIERS&lt;/b&gt;&lt;p&gt;
Source: http://focus.ti.com/lit/ds/sbos058/sbos058.pdf</description>
<gates>
<gate name="A" symbol="OPAMP" x="0" y="0" addlevel="always" swaplevel="1"/>
<gate name="B" symbol="OPAMP" x="25.4" y="0" addlevel="always" swaplevel="1"/>
<gate name="P" symbol="PWR+-" x="0" y="0" addlevel="always"/>
</gates>
<devices>
<device name="P" package="DIL08">
<connects>
<connect gate="A" pin="+IN" pad="3"/>
<connect gate="A" pin="-IN" pad="2"/>
<connect gate="A" pin="OUT" pad="1"/>
<connect gate="B" pin="+IN" pad="5"/>
<connect gate="B" pin="-IN" pad="6"/>
<connect gate="B" pin="OUT" pad="7"/>
<connect gate="P" pin="V+" pad="8"/>
<connect gate="P" pin="V-" pad="4"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
<device name="D" package="SOIC8">
<connects>
<connect gate="A" pin="+IN" pad="3"/>
<connect gate="A" pin="-IN" pad="2"/>
<connect gate="A" pin="OUT" pad="1"/>
<connect gate="B" pin="+IN" pad="5"/>
<connect gate="B" pin="-IN" pad="6"/>
<connect gate="B" pin="OUT" pad="7"/>
<connect gate="P" pin="V+" pad="8"/>
<connect gate="P" pin="V-" pad="4"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
<deviceset name="OPA2725" prefix="IC">
<description>&lt;b&gt;Very Low Noise, High-Speed, 12V CMOS Operational Amplifier&lt;/b&gt;&lt;p&gt;
Source: http://focus.ti.com/lit/ds/symlink/opa725.pdf</description>
<gates>
<gate name="A" symbol="OPAMP" x="0" y="0" addlevel="always"/>
<gate name="B" symbol="OPAMP" x="22.86" y="0" addlevel="always"/>
<gate name="P" symbol="PWR+-" x="0" y="0" addlevel="always"/>
</gates>
<devices>
<device name="D" package="SO08">
<connects>
<connect gate="A" pin="+IN" pad="3"/>
<connect gate="A" pin="-IN" pad="2"/>
<connect gate="A" pin="OUT" pad="1"/>
<connect gate="B" pin="+IN" pad="5"/>
<connect gate="B" pin="-IN" pad="6"/>
<connect gate="B" pin="OUT" pad="7"/>
<connect gate="P" pin="V+" pad="8"/>
<connect gate="P" pin="V-" pad="4"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
<device name="DGK" package="MSOP08">
<connects>
<connect gate="A" pin="+IN" pad="3"/>
<connect gate="A" pin="-IN" pad="2"/>
<connect gate="A" pin="OUT" pad="1"/>
<connect gate="B" pin="+IN" pad="5"/>
<connect gate="B" pin="-IN" pad="6"/>
<connect gate="B" pin="OUT" pad="7"/>
<connect gate="P" pin="V+" pad="8"/>
<connect gate="P" pin="V-" pad="4"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="pinhead">
<description>&lt;b&gt;Pin Header Connectors&lt;/b&gt;&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="1X01">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<wire x1="-0.635" y1="1.27" x2="0.635" y2="1.27" width="0.1524" layer="21"/>
<wire x1="0.635" y1="1.27" x2="1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="0.635" x2="1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-0.635" x2="0.635" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="0.635" x2="-1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="-0.635" y1="1.27" x2="-1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="-0.635" x2="-0.635" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="0.635" y1="-1.27" x2="-0.635" y2="-1.27" width="0.1524" layer="21"/>
<pad name="1" x="0" y="0" drill="1.016" shape="octagon"/>
<text x="-1.3462" y="1.8288" size="1.27" layer="25" ratio="10">&gt;NAME</text>
<text x="-1.27" y="-3.175" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="-0.254" y1="-0.254" x2="0.254" y2="0.254" layer="51"/>
</package>
</packages>
<symbols>
<symbol name="PINHD1">
<wire x1="-6.35" y1="-2.54" x2="1.27" y2="-2.54" width="0.4064" layer="94"/>
<wire x1="1.27" y1="-2.54" x2="1.27" y2="2.54" width="0.4064" layer="94"/>
<wire x1="1.27" y1="2.54" x2="-6.35" y2="2.54" width="0.4064" layer="94"/>
<wire x1="-6.35" y1="2.54" x2="-6.35" y2="-2.54" width="0.4064" layer="94"/>
<text x="-6.35" y="3.175" size="1.778" layer="95">&gt;NAME</text>
<text x="-6.35" y="-5.08" size="1.778" layer="96">&gt;VALUE</text>
<pin name="1" x="-2.54" y="0" visible="pad" length="short" direction="pas" function="dot"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="PINHD-1X1" prefix="JP" uservalue="yes">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<gates>
<gate name="G$1" symbol="PINHD1" x="0" y="0"/>
</gates>
<devices>
<device name="" package="1X01">
<connects>
<connect gate="G$1" pin="1" pad="1"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
</libraries>
<attributes>
</attributes>
<variantdefs>
</variantdefs>
<classes>
<class number="0" name="default" width="0" drill="0">
</class>
</classes>
<parts>
<part name="IC1" library="linear" deviceset="OPA2134" device="D"/>
<part name="IC2" library="linear" deviceset="OPA2725" device="DGK"/>
<part name="JP1" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP2" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP3" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP4" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP5" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP6" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP7" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP8" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP9" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP10" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP11" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP12" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP13" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP14" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP15" library="pinhead" deviceset="PINHD-1X1" device=""/>
<part name="JP16" library="pinhead" deviceset="PINHD-1X1" device=""/>
</parts>
<sheets>
<sheet>
<plain>
</plain>
<instances>
<instance part="IC1" gate="A" x="15.24" y="48.26"/>
<instance part="IC1" gate="B" x="40.64" y="48.26"/>
<instance part="IC1" gate="P" x="15.24" y="48.26"/>
<instance part="IC2" gate="A" x="132.08" y="48.26"/>
<instance part="IC2" gate="B" x="154.94" y="48.26"/>
<instance part="IC2" gate="P" x="132.08" y="48.26"/>
<instance part="JP1" gate="G$1" x="71.12" y="86.36"/>
<instance part="JP2" gate="G$1" x="71.12" y="76.2"/>
<instance part="JP3" gate="G$1" x="71.12" y="63.5"/>
<instance part="JP4" gate="G$1" x="71.12" y="53.34"/>
<instance part="JP5" gate="G$1" x="71.12" y="40.64"/>
<instance part="JP6" gate="G$1" x="71.12" y="30.48"/>
<instance part="JP7" gate="G$1" x="71.12" y="17.78"/>
<instance part="JP8" gate="G$1" x="71.12" y="5.08"/>
<instance part="JP9" gate="G$1" x="101.6" y="86.36"/>
<instance part="JP10" gate="G$1" x="101.6" y="73.66"/>
<instance part="JP11" gate="G$1" x="101.6" y="66.04"/>
<instance part="JP12" gate="G$1" x="101.6" y="55.88"/>
<instance part="JP13" gate="G$1" x="99.06" y="48.26"/>
<instance part="JP14" gate="G$1" x="101.6" y="38.1"/>
<instance part="JP15" gate="G$1" x="101.6" y="27.94"/>
<instance part="JP16" gate="G$1" x="101.6" y="10.16"/>
</instances>
<busses>
</busses>
<nets>
<net name="N$1" class="0">
<segment>
<pinref part="IC1" gate="A" pin="OUT"/>
<wire x1="22.86" y1="48.26" x2="22.86" y2="50.8" width="0.1524" layer="91"/>
<wire x1="22.86" y1="50.8" x2="58.42" y2="86.36" width="0.1524" layer="91"/>
<pinref part="JP1" gate="G$1" pin="1"/>
<wire x1="58.42" y1="86.36" x2="68.58" y2="86.36" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$2" class="0">
<segment>
<pinref part="IC1" gate="A" pin="-IN"/>
<wire x1="7.62" y1="45.72" x2="0" y2="45.72" width="0.1524" layer="91"/>
<wire x1="0" y1="45.72" x2="-2.54" y2="48.26" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="48.26" x2="-2.54" y2="58.42" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="58.42" x2="12.7" y2="73.66" width="0.1524" layer="91"/>
<pinref part="JP2" gate="G$1" pin="1"/>
<wire x1="12.7" y1="73.66" x2="66.04" y2="73.66" width="0.1524" layer="91"/>
<wire x1="66.04" y1="73.66" x2="68.58" y2="76.2" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$3" class="0">
<segment>
<pinref part="IC1" gate="A" pin="+IN"/>
<wire x1="7.62" y1="50.8" x2="7.62" y2="55.88" width="0.1524" layer="91"/>
<wire x1="7.62" y1="55.88" x2="15.24" y2="63.5" width="0.1524" layer="91"/>
<pinref part="JP3" gate="G$1" pin="1"/>
<wire x1="15.24" y1="63.5" x2="68.58" y2="63.5" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$4" class="0">
<segment>
<pinref part="IC1" gate="P" pin="V-"/>
<pinref part="JP4" gate="G$1" pin="1"/>
<wire x1="15.24" y1="40.64" x2="55.88" y2="40.64" width="0.1524" layer="91"/>
<wire x1="55.88" y1="40.64" x2="68.58" y2="53.34" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$5" class="0">
<segment>
<pinref part="IC1" gate="B" pin="+IN"/>
<wire x1="33.02" y1="50.8" x2="50.8" y2="50.8" width="0.1524" layer="91"/>
<wire x1="50.8" y1="50.8" x2="60.96" y2="40.64" width="0.1524" layer="91"/>
<pinref part="JP5" gate="G$1" pin="1"/>
<wire x1="60.96" y1="40.64" x2="68.58" y2="40.64" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$6" class="0">
<segment>
<pinref part="IC1" gate="B" pin="-IN"/>
<pinref part="JP6" gate="G$1" pin="1"/>
<wire x1="33.02" y1="45.72" x2="53.34" y2="45.72" width="0.1524" layer="91"/>
<wire x1="53.34" y1="45.72" x2="68.58" y2="30.48" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$7" class="0">
<segment>
<pinref part="IC1" gate="B" pin="OUT"/>
<pinref part="JP7" gate="G$1" pin="1"/>
<wire x1="48.26" y1="48.26" x2="48.26" y2="38.1" width="0.1524" layer="91"/>
<wire x1="48.26" y1="38.1" x2="68.58" y2="17.78" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$8" class="0">
<segment>
<pinref part="IC1" gate="P" pin="V+"/>
<pinref part="JP8" gate="G$1" pin="1"/>
<wire x1="15.24" y1="55.88" x2="17.78" y2="55.88" width="0.1524" layer="91"/>
<wire x1="17.78" y1="55.88" x2="68.58" y2="5.08" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$9" class="0">
<segment>
<pinref part="IC2" gate="A" pin="OUT"/>
<wire x1="139.7" y1="48.26" x2="139.7" y2="55.88" width="0.1524" layer="91"/>
<wire x1="139.7" y1="55.88" x2="109.22" y2="86.36" width="0.1524" layer="91"/>
<pinref part="JP9" gate="G$1" pin="1"/>
<wire x1="109.22" y1="86.36" x2="99.06" y2="86.36" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$10" class="0">
<segment>
<pinref part="IC2" gate="A" pin="-IN"/>
<pinref part="JP10" gate="G$1" pin="1"/>
<wire x1="124.46" y1="45.72" x2="124.46" y2="48.26" width="0.1524" layer="91"/>
<wire x1="124.46" y1="48.26" x2="99.06" y2="73.66" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$11" class="0">
<segment>
<pinref part="IC2" gate="A" pin="+IN"/>
<pinref part="JP11" gate="G$1" pin="1"/>
<wire x1="124.46" y1="50.8" x2="114.3" y2="50.8" width="0.1524" layer="91"/>
<wire x1="114.3" y1="50.8" x2="99.06" y2="66.04" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$12" class="0">
<segment>
<pinref part="IC2" gate="P" pin="V-"/>
<pinref part="JP12" gate="G$1" pin="1"/>
<wire x1="132.08" y1="40.64" x2="114.3" y2="40.64" width="0.1524" layer="91"/>
<wire x1="114.3" y1="40.64" x2="99.06" y2="55.88" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$13" class="0">
<segment>
<pinref part="IC2" gate="B" pin="+IN"/>
<wire x1="147.32" y1="50.8" x2="144.78" y2="48.26" width="0.1524" layer="91"/>
<wire x1="144.78" y1="48.26" x2="144.78" y2="45.72" width="0.1524" layer="91"/>
<wire x1="144.78" y1="45.72" x2="134.62" y2="35.56" width="0.1524" layer="91"/>
<pinref part="JP13" gate="G$1" pin="1"/>
<wire x1="134.62" y1="35.56" x2="109.22" y2="35.56" width="0.1524" layer="91"/>
<wire x1="109.22" y1="35.56" x2="96.52" y2="48.26" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$14" class="0">
<segment>
<pinref part="IC2" gate="B" pin="-IN"/>
<wire x1="147.32" y1="45.72" x2="147.32" y2="40.64" width="0.1524" layer="91"/>
<wire x1="147.32" y1="40.64" x2="137.16" y2="30.48" width="0.1524" layer="91"/>
<pinref part="JP14" gate="G$1" pin="1"/>
<wire x1="137.16" y1="30.48" x2="106.68" y2="30.48" width="0.1524" layer="91"/>
<wire x1="106.68" y1="30.48" x2="99.06" y2="38.1" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$15" class="0">
<segment>
<pinref part="IC2" gate="B" pin="OUT"/>
<wire x1="162.56" y1="48.26" x2="160.02" y2="48.26" width="0.1524" layer="91"/>
<wire x1="160.02" y1="48.26" x2="139.7" y2="27.94" width="0.1524" layer="91"/>
<pinref part="JP15" gate="G$1" pin="1"/>
<wire x1="139.7" y1="27.94" x2="99.06" y2="27.94" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$16" class="0">
<segment>
<pinref part="IC2" gate="P" pin="V+"/>
<wire x1="132.08" y1="55.88" x2="127" y2="55.88" width="0.1524" layer="91"/>
<wire x1="127" y1="55.88" x2="119.38" y2="63.5" width="0.1524" layer="91"/>
<pinref part="JP16" gate="G$1" pin="1"/>
<wire x1="119.38" y1="63.5" x2="119.38" y2="30.48" width="0.1524" layer="91"/>
<wire x1="119.38" y1="30.48" x2="99.06" y2="10.16" width="0.1524" layer="91"/>
</segment>
</net>
</nets>
</sheet>
</sheets>
</schematic>
</drawing>
</eagle>
