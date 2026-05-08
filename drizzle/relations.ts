import { relations } from "drizzle-orm/relations";
import { cognitiveProcess, codex, biases, taskBase, flavors, biasCognitiveProcess, theories, biasTheory, academicFields, theoryAcademicField, methods, biasMethod, situations, biasSituation, socialDynamics, biasSocialDynamics, methodCognitiveProcess, methodSituation, methodSocialDynamics, biasUsages } from "./schema";

export const cognitiveProcessRelations = relations(cognitiveProcess, ({one, many}) => ({
	cognitiveProcess: one(cognitiveProcess, {
		fields: [cognitiveProcess.parentId],
		references: [cognitiveProcess.id],
		relationName: "cognitiveProcess_parentId_cognitiveProcess_id"
	}),
	cognitiveProcesses: many(cognitiveProcess, {
		relationName: "cognitiveProcess_parentId_cognitiveProcess_id"
	}),
	biasCognitiveProcesses: many(biasCognitiveProcess),
	methodCognitiveProcesses: many(methodCognitiveProcess),
}));

export const codexRelations = relations(codex, ({one, many}) => ({
	codex: one(codex, {
		fields: [codex.parentId],
		references: [codex.id],
		relationName: "codex_parentId_codex_id"
	}),
	codices: many(codex, {
		relationName: "codex_parentId_codex_id"
	}),
	biases: many(biases),
}));

export const biasesRelations = relations(biases, ({one, many}) => ({
	codex: one(codex, {
		fields: [biases.codexId],
		references: [codex.id]
	}),
	taskBase: one(taskBase, {
		fields: [biases.taskBaseId],
		references: [taskBase.id]
	}),
	flavor: one(flavors, {
		fields: [biases.flavorId],
		references: [flavors.id]
	}),
	biasCognitiveProcesses: many(biasCognitiveProcess),
	biasTheories: many(biasTheory),
	biasMethods: many(biasMethod),
	biasSituations: many(biasSituation),
	biasSocialDynamics: many(biasSocialDynamics),
	biasUsages: many(biasUsages),
}));

export const taskBaseRelations = relations(taskBase, ({many}) => ({
	biases: many(biases),
}));

export const flavorsRelations = relations(flavors, ({many}) => ({
	biases: many(biases),
}));

export const biasCognitiveProcessRelations = relations(biasCognitiveProcess, ({one}) => ({
	cognitiveProcess: one(cognitiveProcess, {
		fields: [biasCognitiveProcess.cognitiveProcessId],
		references: [cognitiveProcess.id]
	}),
	biase: one(biases, {
		fields: [biasCognitiveProcess.biasId],
		references: [biases.id]
	}),
}));

export const biasTheoryRelations = relations(biasTheory, ({one}) => ({
	theory: one(theories, {
		fields: [biasTheory.theoryId],
		references: [theories.id]
	}),
	biase: one(biases, {
		fields: [biasTheory.biasId],
		references: [biases.id]
	}),
}));

export const theoriesRelations = relations(theories, ({many}) => ({
	biasTheories: many(biasTheory),
	theoryAcademicFields: many(theoryAcademicField),
}));

export const theoryAcademicFieldRelations = relations(theoryAcademicField, ({one}) => ({
	academicField: one(academicFields, {
		fields: [theoryAcademicField.academicFieldId],
		references: [academicFields.id]
	}),
	theory: one(theories, {
		fields: [theoryAcademicField.theoryId],
		references: [theories.id]
	}),
}));

export const academicFieldsRelations = relations(academicFields, ({many}) => ({
	theoryAcademicFields: many(theoryAcademicField),
}));

export const biasMethodRelations = relations(biasMethod, ({one}) => ({
	method: one(methods, {
		fields: [biasMethod.methodId],
		references: [methods.id]
	}),
	biase: one(biases, {
		fields: [biasMethod.biasId],
		references: [biases.id]
	}),
}));

export const methodsRelations = relations(methods, ({many}) => ({
	biasMethods: many(biasMethod),
	methodCognitiveProcesses: many(methodCognitiveProcess),
	methodSituations: many(methodSituation),
	methodSocialDynamics: many(methodSocialDynamics),
}));

export const biasSituationRelations = relations(biasSituation, ({one}) => ({
	situation: one(situations, {
		fields: [biasSituation.situationId],
		references: [situations.id]
	}),
	biase: one(biases, {
		fields: [biasSituation.biasId],
		references: [biases.id]
	}),
}));

export const situationsRelations = relations(situations, ({many}) => ({
	biasSituations: many(biasSituation),
	methodSituations: many(methodSituation),
	biasUsages: many(biasUsages),
}));

export const biasSocialDynamicsRelations = relations(biasSocialDynamics, ({one}) => ({
	socialDynamic: one(socialDynamics, {
		fields: [biasSocialDynamics.socialDynamicsId],
		references: [socialDynamics.id]
	}),
	biase: one(biases, {
		fields: [biasSocialDynamics.biasId],
		references: [biases.id]
	}),
}));

export const socialDynamicsRelations = relations(socialDynamics, ({many}) => ({
	biasSocialDynamics: many(biasSocialDynamics),
	methodSocialDynamics: many(methodSocialDynamics),
}));

export const methodCognitiveProcessRelations = relations(methodCognitiveProcess, ({one}) => ({
	cognitiveProcess: one(cognitiveProcess, {
		fields: [methodCognitiveProcess.cognitiveProcessId],
		references: [cognitiveProcess.id]
	}),
	method: one(methods, {
		fields: [methodCognitiveProcess.methodId],
		references: [methods.id]
	}),
}));

export const methodSituationRelations = relations(methodSituation, ({one}) => ({
	situation: one(situations, {
		fields: [methodSituation.situationId],
		references: [situations.id]
	}),
	method: one(methods, {
		fields: [methodSituation.methodId],
		references: [methods.id]
	}),
}));

export const methodSocialDynamicsRelations = relations(methodSocialDynamics, ({one}) => ({
	socialDynamic: one(socialDynamics, {
		fields: [methodSocialDynamics.socialDynamicsId],
		references: [socialDynamics.id]
	}),
	method: one(methods, {
		fields: [methodSocialDynamics.methodId],
		references: [methods.id]
	}),
}));

export const biasUsagesRelations = relations(biasUsages, ({one}) => ({
	situation: one(situations, {
		fields: [biasUsages.situationId],
		references: [situations.id]
	}),
	biase: one(biases, {
		fields: [biasUsages.biasId],
		references: [biases.id]
	}),
}));