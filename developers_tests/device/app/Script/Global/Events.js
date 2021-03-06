﻿// ------------------------ Application -------------------

function OnApplicationInit() {
	var r = Global.TestResult();
}

// ------------------------ Events ------------------------

function OnLoad(screenName) {

}

function OnWorkflowStart(name) {
	Console.WriteLine("OnWorkflowStart: " + name);
	
	if ($.Exists("workflow"))
		$.Remove("workflow");
	Variables.AddGlobal("workflow", new Dictionary());
	Variables["workflow"].Add("name", name);	
}

function OnWorkflowForwarding(workflowName, lastStep, nextStep, parameters) {
	Console.WriteLine("OnWorkflowForwarding: " + workflowName);
	return true;
}

function OnWorkflowForward(name, lastStep, nextStep, parameters) {
	Console.WriteLine("OnWorkflowForward: " + name);
}

function OnWorkflowBack(name, lastStep, nextStep) {
	Console.WriteLine("OnWorkflowBack: " + name);
}

function OnWorkflowFinish(name, reason) {
	Console.WriteLine("OnWorkflowFinish: " + name);
}

function OnWorkflowFinished(name, reason) {
	Dialog.Debug("OnWorkflowFinished: " + name);
}

function OnWorkflowPause(name) {
	Console.WriteLine("OnWorkflowPause: " + name);
	
	Variables.Remove("workflow");
}

// ------------------------ Functions ------------------------


