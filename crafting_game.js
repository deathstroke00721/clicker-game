function format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var energyIcon = document.querySelector('#energy-input');
var energyBar = document.querySelector('#energy');
var energyOutput = document.querySelector('#energy-output');
var energyUpgradeBtn = document.querySelector('#energy-upgrade');
var energyUpgrade = document.querySelector('#energy-upgrade-cost')
var energyY = 1.08;
var energyUpgradeCost = Math.floor(Math.pow(8, energyY));
var energyMaxUpgradeBtn = document.querySelector('#energy-max-upgrade');
var energyMaxOutput = document.querySelector('#energy-max');
var energyMaxCostOutput = document.querySelector('#energy-max-cost');
var energyMax = 10;
var energyX = 1.08;
var energyMaxUpgradeCost = Math.floor(Math.pow(8, energyX));
var energyAutoBtn = document.querySelector('#energy-auto');
var energyAutoCostOutput = document.querySelector('#energy-auto-cost');
var energyAutoCost = 4;
var energyAutoBool = false;
var energyProgress = 0;
var energyProgressRate = 1;
var energy = 0;
var doEnergyFill;
var energyUpgradeCount = 0;

var metalIcon = document.querySelector('#metal-input');
var metalBar = document.querySelector('#metal');
var metalOutput = document.querySelector('#metal-output');
var metalUpgradeBtn = document.querySelector('#metal-upgrade');
var metalUpgrade = document.querySelector('#metal-upgrade-cost')
var metalY = 1.08;
var metalUpgradeCost = Math.floor(Math.pow(8, metalY));
var metalMaxUpgradeBtn = document.querySelector('#metal-max-upgrade');
var metalMaxOutput = document.querySelector('#metal-max');
var metalMaxCostOutput = document.querySelector('#metal-max-cost');
var metalMax = 10;
var metalX = 1.08;
var metalMaxUpgradeCost = Math.floor(Math.pow(8, metalX));
var metalAutoBtn = document.querySelector('#metal-auto');
var metalAutoCostOutput = document.querySelector('#metal-auto-cost');
var metalAutoCost = 4;
var metalAutoBool = false;
var metalProgress = 0;
var metalProgressRate = 1;
var metal = 0;
var doMetalFill;
var metalUpgradeCount = 0;

var wireIcon = document.querySelector('#wire-input');
var wireBar = document.querySelector('#wire');
var wireOutput = document.querySelector('#wire-output');
var wireUpgradeBtn = document.querySelector('#wire-upgrade');
var wireUpgrade = document.querySelector('#wire-upgrade-cost')
var wireY = 1.08;
var wireUpgradeCost = Math.floor(Math.pow(8, wireY));
var wireMaxUpgradeBtn = document.querySelector('#wire-max-upgrade');
var wireMaxOutput = document.querySelector('#wire-max');
var wireMaxCostOutput = document.querySelector('#wire-max-cost');
var wireMax = 10;
var wireX = 1.08;
var wireMaxUpgradeCost = Math.floor(Math.pow(8, wireX));
var wireAutoBtn = document.querySelector('#wire-auto');
var wireAutoCostOutput = document.querySelector('#wire-auto-cost');
var wireAutoCost = 4;
var wireAutoBool = false;
var wireProgress = 0;
var wireProgressRate = 1;
var wire = 0;
var wireCostEnergy = 1;
var wireCostMetal = 2;
var dowireFill;
var wireUpgradeCount = 0;

var circuitIcon = document.querySelector('#circuit-input');
var circuitBar = document.querySelector('#circuit');
var circuitOutput = document.querySelector('#circuit-output');
var circuitUpgradeBtn = document.querySelector('#circuit-upgrade');
var circuitUpgrade = document.querySelector('#circuit-upgrade-cost')
var circuitY = 1.08;
var circuitUpgradeCost = Math.floor(Math.pow(8, circuitY));
var circuitMaxUpgradeBtn = document.querySelector('#circuit-max-upgrade');
var circuitMaxOutput = document.querySelector('#circuit-max');
var circuitMaxCostOutput = document.querySelector('#circuit-max-cost');
var circuitMax = 10;
var circuitX = 1.08;
var circuitMaxUpgradeCost = Math.floor(Math.pow(8, circuitX));
var circuitAutoBtn = document.querySelector('#circuit-auto');
var circuitAutoCostOutput = document.querySelector('#circuit-auto-cost');
var circuitAutoCost = 4;
var circuitAutoBool = false;
var circuitProgress = 0;
var circuitProgressRate = 1;
var circuit = 0;
var circuitCostEnergy = 2;
var circuitCostMetal = 1;
var docircuitFill;
var circuitUpgradeCount = 0;

var logicboardIcon = document.querySelector('#logicboard-input');
var logicboardBar = document.querySelector('#logicboard');
var logicboardOutput = document.querySelector('#logicboard-output');
var logicboardUpgradeBtn = document.querySelector('#logicboard-upgrade');
var logicboardUpgrade = document.querySelector('#logicboard-upgrade-cost')
var logicboardY = 1.08;
var logicboardUpgradeCost = Math.floor(Math.pow(8, logicboardY));
var logicboardMaxUpgradeBtn = document.querySelector('#logicboard-max-upgrade');
var logicboardMaxOutput = document.querySelector('#logicboard-max');
var logicboardMaxCostOutput = document.querySelector('#logicboard-max-cost');
var logicboardMax = 10;
var logicboardX = 1.08;
var logicboardMaxUpgradeCost = Math.floor(Math.pow(8, logicboardX));
var logicboardAutoBtn = document.querySelector('#logicboard-auto');
var logicboardAutoCostOutput = document.querySelector('#logicboard-auto-cost');
var logicboardAutoCost = 4;
var logicboardAutoBool = false;
var logicboardProgress = 0;
var logicboardProgressRate = 1;
var logicboard = 0;
var logicboardCostCircuit = 2;
var logicboardCostMetal = 2;
var dologicboardFill;
var logicboardUpgradeCount = 0;

var chipsIcon = document.querySelector('#chips-input');
var chipsBar = document.querySelector('#chips');
var chipsOutput = document.querySelector('#chips-output');
var chipsUpgradeBtn = document.querySelector('#chips-upgrade');
var chipsUpgrade = document.querySelector('#chips-upgrade-cost')
var chipsY = 1.08;
var chipsUpgradeCost = Math.floor(Math.pow(8, chipsY));
var chipsMaxUpgradeBtn = document.querySelector('#chips-max-upgrade');
var chipsMaxOutput = document.querySelector('#chips-max');
var chipsMaxCostOutput = document.querySelector('#chips-max-cost');
var chipsMax = 10;
var chipsX = 1.08;
var chipsMaxUpgradeCost = Math.floor(Math.pow(8, chipsX));
var chipsAutoBtn = document.querySelector('#chips-auto');
var chipsAutoCostOutput = document.querySelector('#chips-auto-cost');
var chipsAutoCost = 4;
var chipsAutoBool = false;
var chipsProgress = 0;
var chipsProgressRate = 1;
var chips = 0;
var chipsCostEnergy = 2;
var chipsCostWire = 2;
var dochipsFill;
var chipsUpgradeCount = 0;

function energyUpdate(){
   energyUpgradeCost = Math.floor(Math.pow(8, energyY));
   energyMaxUpgradeCost = Math.floor(Math.pow(8, energyX));
   energyOutput.innerHTML = format(energy);
   metalOutput.innerHTML = format(metal);
   wireOutput.innerHTML = format(wire);
   circuitOutput.innerHTML = format(circuit);
   logicboardOutput.innerHTML = format(logicboard);
   chipsOutput.innerHTML = format(chips);
   energyMaxOutput.innerHTML = format(energyMax);
   energyMaxCostOutput.innerHTML = format(energyMaxUpgradeCost);
   energyAutoCostOutput.innerHTML = format(energyAutoCost);
   energyUpgradeBtn.value = "Upgrade "+ format(energyUpgradeCount);
   if (energyProgressRate>=4 && energyAutoBool ===true){
      energyBar.style.width = "300px";
      energyBar.classList.add("infinite");
   }else{
      energyBar.style.width = energyProgress+"px";
   }
   energyUpgrade.innerHTML = format(energyUpgradeCost);
}
energyUpdate();
function energyFill(){
   if (energyAutoBool === true){
      energyIcon.disabled = true;
      energyAutoBtn.disabled = true;
   }
   if (energyProgress>=300){
      if (energyAutoBool === false){
         clearInterval(doEnergyFill);
      }
      energyProgress = 0;
      energyUpdate();
      energy++;
      energyUpdate();
      energyIcon.disabled = false;
      energyAutoBtn.disabled = false;

   }else if(energy<energyMax){
      energyProgress+=energyProgressRate;
      energyUpdate();

   }
}
energyUpgradeBtn.onclick = function(){
   if(energy>=energyUpgradeCost){
      energy-=energyUpgradeCost;
      energyY+=0.15;
      energyProgressRate+=0.5;
      energyUpgradeCount++;
      energyUpdate();
   }

}
energyMaxUpgradeBtn.onclick = function(){
   if (energy>=energyMaxUpgradeCost){
      energy-=energyMaxUpgradeCost;
      energyMax+=energyMaxUpgradeCost;
      energyX+=0.3;
      energyUpdate();
   }
}
energyAutoBtn.onclick = function(){
   if (energy>=energyAutoCost){
      energy-=energyAutoCost;
      energyIcon.disabled = true;
      energyAutoBtn.disabled = true;
      energyAutoBtn.classList.add('disabled');
      energyAutoBool = true;
      doEnergyFill = setInterval(energyFill, 0);
   }


}
energyIcon.onclick = function(){
   energyIcon.disabled = true;
   energyAutoBtn.disabled = true;
   doEnergyFill = setInterval(energyFill, 0);

}


//////NOTE METAL



function metalUpdate(){
   metalMaxUpgradeCost = Math.floor(Math.pow(8, metalX));
   metalUpgradeCost = Math.floor(Math.pow(8, metalY));
   energyOutput.innerHTML = format(energy);
   metalOutput.innerHTML = format(metal);
   wireOutput.innerHTML = format(wire);
   circuitOutput.innerHTML = format(circuit);
   logicboardOutput.innerHTML = format(logicboard);
   chipsOutput.innerHTML = format(chips);
   metalMaxOutput.innerHTML = format(metalMax);
   metalMaxCostOutput.innerHTML = format(metalMaxUpgradeCost);
   metalAutoCostOutput.innerHTML = format(metalAutoCost);
   metalUpgradeBtn.value = "Upgrade "+format(metalUpgradeCount);
   if (metalProgressRate>=4 && metalAutoBool ===true){
      metalBar.style.width = "300px";
      metalBar.classList.add("infinite");
   }else{
      metalBar.style.width = metalProgress+"px";
   }
   metalUpgrade.innerHTML = format(metalUpgradeCost);
}
metalUpdate();
function metalFill(){
   if (metalAutoBool === true){
      metalIcon.disabled = true;
      metalAutoBtn.disabled = true;
   }
   if (metalProgress>=300){
      if (metalAutoBool === false){
         clearInterval(doMetalFill);
      }
      metalProgress = 0;
      metalUpdate();
      metal++;
      metalUpdate();
      metalIcon.disabled = false;
      metalAutoBtn.disabled = false;

   }else if(metal<metalMax){
      metalProgress+=metalProgressRate;
      metalUpdate();

   }
}
metalUpgradeBtn.onclick = function(){
   if(metal>=metalUpgradeCost){
      metal-=metalUpgradeCost;
      metalY+=0.15;
      metalProgressRate+=0.5;
      metalUpgradeCount++;
      metalUpdate();
   }

}
metalMaxUpgradeBtn.onclick = function(){
   if (metal>=metalMaxUpgradeCost){
      metal-=metalMaxUpgradeCost;
      metalMax+=metalUpgradeCost;
      metalX+=0.3;
      metalUpdate();
   }
}
metalAutoBtn.onclick = function(){
   if (metal>=metalAutoCost){
      metal-=metalAutoCost;
      metalIcon.disabled = true;
      metalAutoBtn.disabled = true;
      metalAutoBtn.classList.add('disabled');
      metalAutoBool = true;
      doMetalFill = setInterval(metalFill, 0);
   }


}
metalIcon.onclick = function(){
   metalIcon.disabled = true;
   metalAutoBtn.disabled = true;
   doMetalFill = setInterval(metalFill, 0);

}


//////NOTE WIRE


function wireUpdate(){
   wireMaxUpgradeCost = Math.floor(Math.pow(8, wireX));
   wireUpgradeCost = Math.floor(Math.pow(8, wireY));
   energyOutput.innerHTML = format(energy);
   metalOutput.innerHTML = format(metal);
   wireOutput.innerHTML = format(wire);
   circuitOutput.innerHTML = format(circuit);
   logicboardOutput.innerHTML = format(logicboard);
   chipsOutput.innerHTML = format(chips);
   wireMaxOutput.innerHTML = format(wireMax);
   wireMaxCostOutput.innerHTML = format(wireMaxUpgradeCost);
   wireAutoCostOutput.innerHTML = format(wireAutoCost);
   wireUpgradeBtn.value = "Upgrade "+format(wireUpgradeCount);
   if (wireProgressRate>=4 && wireAutoBool ===true){
      wireBar.style.width = "300px";
      wireBar.classList.add("infinite");
   }else{
      wireBar.style.width = wireProgress+"px";
   }
   wireUpgrade.innerHTML =format(wireUpgradeCost);
}
wireUpdate();
function wireFill(){
   if (energy>=wireCostEnergy && metal>=wireCostMetal){
      if (wireAutoBool === true){
         wireIcon.disabled = true;
         wireAutoBtn.disabled = true;
      }
      if (wireProgress>=300){
         if (wireAutoBool === false){
            clearInterval(dowireFill);
         }
         wireProgress = 0;
         wireUpdate();
         wire++;
         energy-=wireCostEnergy;
         metal-=wireCostMetal;
         wireUpdate();
         wireIcon.disabled = false;
         wireAutoBtn.disabled = false;

      }else if(wire<wireMax){
         wireProgress+=wireProgressRate;
         wireUpdate();

      }
   }

}
wireUpgradeBtn.onclick = function(){
   if(wire>=wireUpgradeCost){
      wire-=wireUpgradeCost;
      wireY+=0.15;
      wireProgressRate+=0.5;
      wireUpgradeCount++;
      wireUpdate();
   }

}
wireMaxUpgradeBtn.onclick = function(){
   if (wire>=wireMaxUpgradeCost){
      wire-=wireMaxUpgradeCost;
      wireX+=0.3;
      wireMax+=wireUpgradeCost;
      wireUpdate();
   }
}
wireAutoBtn.onclick = function(){
   if (wire>=wireAutoCost){
      wire-=wireAutoCost;
      wireIcon.disabled = true;
      wireAutoBtn.disabled = true;
      wireAutoBtn.classList.add('disabled');
      wireAutoBool = true;
      dowireFill = setInterval(wireFill, 0);
   }


}
wireIcon.onclick = function(){
   if (energy>=wireCostEnergy && metal>=wireCostMetal){
      wireIcon.disabled = true;
      wireAutoBtn.disabled = true;
      dowireFill = setInterval(wireFill, 0);
   }

}


/////NOTE Circuit


function circuitUpdate(){
   circuitMaxUpgradeCost = Math.floor(Math.pow(8, circuitX));
   circuitUpgradeCost = Math.floor(Math.pow(8, circuitY));
   energyOutput.innerHTML = format(energy);
   metalOutput.innerHTML = format(metal);
   wireOutput.innerHTML = format(wire);
   circuitOutput.innerHTML = format(circuit);
   logicboardOutput.innerHTML = format(logicboard);
   chipsOutput.innerHTML = format(chips);
   circuitMaxOutput.innerHTML = format(circuitMax);
   circuitMaxCostOutput.innerHTML = format(circuitMaxUpgradeCost);
   circuitAutoCostOutput.innerHTML = format(circuitAutoCost);
   circuitUpgradeBtn.value = "Upgrade "+format(circuitUpgradeCount);
   if (circuitProgressRate>=4 && circuitAutoBool ===true){
      circuitBar.style.width = "300px";
      circuitBar.classList.add("infinite");
   }else{
      circuitBar.style.width = circuitProgress+"px";
   }
   circuitUpgrade.innerHTML = format(circuitUpgradeCost);
}
circuitUpdate();
function circuitFill(){
   if (energy>=circuitCostEnergy && metal>=circuitCostMetal) {
      if (circuitAutoBool === true){
         circuitIcon.disabled = true;
         circuitAutoBtn.disabled = true;
      }
      if (circuitProgress>=300){
         if (circuitAutoBool === false){
            clearInterval(docircuitFill);
         }
         circuitProgress = 0;
         circuitUpdate();
         circuit++;
         energy-=circuitCostEnergy;
         metal-=circuitCostMetal;
         circuitUpdate();
         circuitIcon.disabled = false;
         circuitAutoBtn.disabled = false;

      }else if(circuit<circuitMax){
         circuitProgress+=circuitProgressRate;
         circuitUpdate();

      }
   }
}
circuitUpgradeBtn.onclick = function(){
   if(circuit>=circuitUpgradeCost){
      circuit-=circuitUpgradeCost;
      circuitY+=0.15;
      circuitProgressRate+=0.5;
      circuitUpgradeCount++;
      circuitUpdate();
   }

}
circuitMaxUpgradeBtn.onclick = function(){
   if (circuit>=circuitMaxUpgradeCost){
      circuit-=circuitMaxUpgradeCost;
      circuitX+=0.3;
      circuitMax+=circuitUpgradeCost;
      circuitUpdate();
   }
}
circuitAutoBtn.onclick = function(){
   if (circuit>=circuitAutoCost){
      circuit-=circuitAutoCost;
      circuitIcon.disabled = true;
      circuitAutoBtn.disabled = true;
      circuitAutoBtn.classList.add('disabled');
      circuitAutoBool = true;
      docircuitFill = setInterval(circuitFill, 0);
   }


}
circuitIcon.onclick = function(){
   if (energy>=circuitCostEnergy && metal>=circuitCostMetal) {
      circuitIcon.disabled = true;
      circuitAutoBtn.disabled = true;
      docircuitFill = setInterval(circuitFill, 0);
   }

}


function logicboardUpdate(){
   logicboardUpgradeCost = Math.floor(Math.pow(8, logicboardY));
   logicboardMaxUpgradeCost = Math.floor(Math.pow(8, logicboardX));
   energyOutput.innerHTML = format(energy);
   metalOutput.innerHTML = format(metal);
   wireOutput.innerHTML = format(wire);
   circuitOutput.innerHTML = format(circuit);
   logicboardOutput.innerHTML = format(logicboard);
   chipsOutput.innerHTML = format(chips);
   logicboardMaxOutput.innerHTML = format(logicboardMax);
   logicboardMaxCostOutput.innerHTML = format(logicboardMaxUpgradeCost);
   logicboardAutoCostOutput.innerHTML = format(logicboardAutoCost);
   logicboardUpgradeBtn.value = "Upgrade "+format(logicboardUpgradeCount);
   if (logicboardProgressRate>=4 && logicboardAutoBool ===true){
      logicboardBar.style.width = "300px";
      logicboardBar.classList.add("infinite");
   }else{
      logicboardBar.style.width = logicboardProgress+"px";
   }
   logicboardUpgrade.innerHTML =format( logicboardUpgradeCost);
}
logicboardUpdate();
function logicboardFill(){
   if (metal>=logicboardCostMetal && circuit>=logicboardCostCircuit) {
      if (logicboardAutoBool === true){
         logicboardIcon.disabled = true;
         logicboardAutoBtn.disabled = true;
      }
      if (logicboardProgress>=300){
         if (logicboardAutoBool === false){
            clearInterval(dologicboardFill);
         }
         logicboardProgress = 0;
         logicboardUpdate();
         logicboard++;
         metal-=logicboardCostMetal;
         circuit-=logicboardCostCircuit;
         logicboardUpdate();
         logicboardIcon.disabled = false;
         logicboardAutoBtn.disabled = false;

      }else if(logicboard<logicboardMax){
         logicboardProgress+=logicboardProgressRate;
         logicboardUpdate();

      }
   }
}
logicboardUpgradeBtn.onclick = function(){
   if(logicboard>=logicboardUpgradeCost){
      logicboard-=logicboardUpgradeCost;
      logicboardY+=0.15;
      logicboardProgressRate+=0.5;
      logicboardUpgradeCount++;
      logicboardUpdate();
   }

}
logicboardMaxUpgradeBtn.onclick = function(){
   if (logicboard>=logicboardMaxUpgradeCost){
      logicboard-=logicboardMaxUpgradeCost;
      logicboardMax+=logicboardUpgradeCost;
      logicboardX+=0.3;
      logicboardUpdate();
   }
}
logicboardAutoBtn.onclick = function(){
   if (logicboard>=logicboardAutoCost){
      logicboard-=logicboardAutoCost;
      logicboardIcon.disabled = true;
      logicboardAutoBtn.disabled = true;
      logicboardAutoBtn.classList.add('disabled');
      logicboardAutoBool = true;
      dologicboardFill = setInterval(logicboardFill, 0);
   }


}
logicboardIcon.onclick = function(){
   if (metal>=logicboardCostMetal && circuit>=logicboardCostCircuit) {
      logicboardIcon.disabled = true;
      logicboardAutoBtn.disabled = true;
      dologicboardFill = setInterval(logicboardFill, 0);
   }
}


function chipsUpdate(){
   chipsUpgradeCost = Math.floor(Math.pow(8, chipsY));
   chipsMaxUpgradeCost = Math.floor(Math.pow(8, chipsX));
   energyOutput.innerHTML = format(energy);
   metalOutput.innerHTML = format(metal);
   wireOutput.innerHTML = format(wire);
   circuitOutput.innerHTML = format(circuit);
   logicboardOutput.innerHTML = format(logicboard);
   chipsOutput.innerHTML = format(chips);
   chipsMaxOutput.innerHTML = format(chipsMax);
   chipsMaxCostOutput.innerHTML = format(chipsMaxUpgradeCost);
   chipsAutoCostOutput.innerHTML = format(chipsAutoCost);
   chipsUpgradeBtn.value = "Upgrade "+format(chipsUpgradeCount);
   if (chipsProgressRate>=4 && chipsAutoBool ===true){
      chipsBar.style.width = "300px";
      chipsBar.classList.add("infinite");
   }else{
      chipsBar.style.width = chipsProgress+"px";
   }
   chipsUpgrade.innerHTML = format(chipsUpgradeCost);
}
chipsUpdate();
function chipsFill(){
   if (energy>=chipsCostEnergy && wire>=chipsCostWire) {
      if (chipsAutoBool === true){
         chipsIcon.disabled = true;
         chipsAutoBtn.disabled = true;
      }
      if (chipsProgress>=300){
         if (chipsAutoBool === false){
            clearInterval(dochipsFill);
         }
         chipsProgress = 0;
         chipsUpdate();
         chips++;
         energy-=chipsCostEnergy;
         wire-=chipsCostWire;
         chipsUpdate();
         chipsIcon.disabled = false;
         chipsAutoBtn.disabled = false;

      }else if(chips<chipsMax){
         chipsProgress+=chipsProgressRate;
         chipsUpdate();

      }
   }
}
chipsUpgradeBtn.onclick = function(){
   if(chips>=chipsUpgradeCost){
      chips-=chipsUpgradeCost;
      chipsY+=0.15;
      chipsProgressRate+=0.5;
      chipsUpgradeCount++;
      chipsUpdate();
   }

}
chipsMaxUpgradeBtn.onclick = function(){
   if (chips>=chipsMaxUpgradeCost){
      chips-=chipsMaxUpgradeCost;
      chipsMax+=chipsUpgradeCost;
      chipsX+=0.3;
      chipsUpdate();
   }
}
chipsAutoBtn.onclick = function(){
   if (chips>=chipsAutoCost){
      chips-=chipsAutoCost;
      chipsIcon.disabled = true;
      chipsAutoBtn.disabled = true;
      chipsAutoBool = true;
      dochipsFill = setInterval(chipsFill, 0);
   }


}
chipsIcon.onclick = function(){
   if (energy>=chipsCostEnergy && wire>=chipsCostWire) {
      chipsIcon.disabled = true;
      chipsAutoBtn.disabled = true;
      chipsAutoBtn.classList.add('disabled');
      dochipsFill = setInterval(chipsFill, 0);
   }

}
