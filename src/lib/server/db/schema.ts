import { sqliteTable, integer, text, foreignKey } from 'drizzle-orm/sqlite-core';

export const theories = sqliteTable("theories", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	summary: text(),
	establishedYear: text("established_year"),
});

export const methods = sqliteTable("methods", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	purpose: text(),
	description: text(),
});

export const taskBase = sqliteTable("task_base", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	summary: text(),
});

export const flavors = sqliteTable("flavors", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	summary: text(),
});

export const academicFields = sqliteTable("academic_fields", {
	id: integer().primaryKey(),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	summary: text(),
});

export const situations = sqliteTable("situations", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	summary: text(),
});

export const evidenceExperiments = sqliteTable("evidence_experiments", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	description: text(),
	year: integer(),
});

export const leverage = sqliteTable("leverage", {
	id: integer().primaryKey({ autoIncrement: true }),
	summary: text(),
	title: text(),
});

export const codex = sqliteTable("codex", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	summary: text(),
	parentId: integer("parent_id"),
},
(table) => [
	foreignKey(() => ({
			columns: [table.parentId],
			foreignColumns: [table.id],
			name: "codex_parent_id_codex_id_fk"
		})),
]);

export const biasTheory = sqliteTable("bias_theory", {
	id: integer().primaryKey({ autoIncrement: true }),
	biasId: integer("bias_id").references(() => biases.id),
	theoryId: integer("theory_id").references(() => theories.id),
	description: text(),
});

export const theoryAcademicField = sqliteTable("theory_academic_field", {
	id: integer().primaryKey({ autoIncrement: true }),
	theoryId: integer("theory_id").references(() => theories.id),
	academicFieldId: integer("academic_field_id").references(() => academicFields.id),
});

export const biasMethod = sqliteTable("bias_method", {
	id: integer().primaryKey({ autoIncrement: true }),
	biasId: integer("bias_id").references(() => biases.id),
	methodId: integer("method_id").references(() => methods.id),
	mitigationStrategy: text("mitigation_strategy"),
});

export const methodCategory = sqliteTable("method_category", {
	id: integer().primaryKey(),
	nameJa: text("name_ja"),
	summary: text(),
});

export const socialDynamics = sqliteTable("social_dynamics", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	summary: text(),
});

export const biasSituation = sqliteTable("bias_situation", {
	id: integer().primaryKey({ autoIncrement: true }),
	biasId: integer("bias_id").references(() => biases.id),
	situationId: integer("situation_id").references(() => situations.id),
	instance1: text("instance_1"),
	sortOrder: integer("sort_order"),
	measures1: text("measures_1"),
	instance2: text("instance_2"),
	measures2: text("measures_2"),
	instance3: text("instance_3"),
	measures3: text("measures_3"),
});

export const biasSocialDynamics = sqliteTable("bias_social_dynamics", {
	id: integer().primaryKey({ autoIncrement: true }),
	biasId: integer("bias_id").references(() => biases.id),
	socialDynamicsId: integer("social_dynamics_id").references(() => socialDynamics.id),
});

export const methodSituation = sqliteTable("method_situation", {
	id: integer().primaryKey({ autoIncrement: true }),
	methodId: integer("method_id").references(() => methods.id),
	situationId: integer("situation_id").references(() => situations.id),
	description: text(),
});

export const methodSocialDynamics = sqliteTable("method_social_dynamics", {
	id: integer().primaryKey({ autoIncrement: true }),
	methodId: integer("method_id").references(() => methods.id),
	socialDynamicsId: integer("social_dynamics_id").references(() => socialDynamics.id),
});

export const biasUsages = sqliteTable("bias_usages", {
	id: integer().primaryKey({ autoIncrement: true }),
	biasId: integer("bias_id").references(() => biases.id),
	situationId: integer("situation_id").references(() => situations.id),
	measures: text(),
	sortOrder: integer("sort_order"),
	effect: text(),
});

export const biasTgModel = sqliteTable("bias_tg_model", {
	id: integer().primaryKey({ autoIncrement: true }),
	group: text(),
	biasId: integer("bias_id").references(() => biases.id),
	category: text(),
	level: integer(),
});

export const timelines = sqliteTable("timelines", {
	id: integer().primaryKey({ autoIncrement: true }),
	title: text(),
	dateText: text("date_text"),
	contents: text(),
	url: text(),
	category: text(),
	biasId: integer("bias_id").references(() => biases.id),
	badges: text(),
	sortOrder: integer("sort_order"),
});

export const biases = sqliteTable("biases", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	definition: text(),
	severity: integer(),
	codexId: integer("codex_id").references(() => codex.id),
	taskBaseId: integer("task_base_id").references(() => taskBase.id),
	flavorId: integer("flavor_id").references(() => flavors.id),
	slogan: text(),
	thumbnail: text(),
	summary: text(),
	measure: text(),
	thinkingMode: integer("thinking_mode"),
	cognitiveProcesses: integer("cognitive_processes"),
	measureImage: text("measure_image"),
	structureTargetTitle: text("structure_target_title"),
	structureTargetDescription: text("structure_target_description"),
	structureTriggerTitle: text("structure_trigger_title"),
	structureTriggerDescription: text("structure_trigger_description"),
	structureKindTitle: text("structure_kind_title"),
	structureKindDescription: text("structure_kind_description"),
	processPerceptionTitle: text("process_perception_title"),
	processPerceptionDescription: text("process_perception_description"),
	processMatchingTitle: text("process_matching_title"),
	processMatchingDescription: text("process_matching_description"),
	processJudgmentTitle: text("process_judgment_title"),
	processJudgmentDescription: text("process_judgment_description"),
	processResponseTitle: text("process_response_title"),
	processResponseDescription: text("process_response_description"),
	predictivePredictionTitle: text("predictive_prediction_title"),
	predictivePredictionDescription: text("predictive_prediction_description"),
	predictiveAccuracyTitle: text("predictive_accuracy_title"),
	predictiveAccuracyDescription: text("predictive_accuracy_description"),
	predictiveCostTitle: text("predictive_cost_title"),
	predictiveCostDescription: text("predictive_cost_description"),
	predictiveConsolidationTitle: text("predictive_consolidation_title"),
	predictiveConsolidationDescription: text("predictive_consolidation_description"),
});

