import { relations } from 'drizzle-orm/relations';
import {
	codex,
	biases,
	taskBase,
	flavors,
	theories,
	biasTheory,
	academicFields,
	theoryAcademicField,
	methods,
	biasMethod,
	situations,
	biasSituation,
	socialDynamics,
	biasSocialDynamics,
	methodSituation,
	methodSocialDynamics,
	biasUsages,
	biasTgModel,
	timelines
} from './schema';

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

export const biasesRelations = relations(biases, ({one, many}) => ({
	biasTheories: many(biasTheory),
	biasMethods: many(biasMethod),
	biasSituations: many(biasSituation),
	biasSocialDynamics: many(biasSocialDynamics),
	biasUsages: many(biasUsages),
	biasTgModels: many(biasTgModel),
	timelines: many(timelines),
	taskBase: one(taskBase, {
		fields: [biases.taskBaseId],
		references: [taskBase.id]
	}),
	flavor: one(flavors, {
		fields: [biases.flavorId],
		references: [flavors.id]
	}),
	codex: one(codex, {
		fields: [biases.codexId],
		references: [codex.id]
	}),
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

export const biasTgModelRelations = relations(biasTgModel, ({one}) => ({
	biase: one(biases, {
		fields: [biasTgModel.biasId],
		references: [biases.id]
	}),
}));

export const timelinesRelations = relations(timelines, ({one}) => ({
	biase: one(biases, {
		fields: [timelines.biasId],
		references: [biases.id]
	}),
}));

export const taskBaseRelations = relations(taskBase, ({many}) => ({
	biases: many(biases),
}));

export const flavorsRelations = relations(flavors, ({many}) => ({
	biases: many(biases),
}));