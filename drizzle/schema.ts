import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

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

export const cognitiveProcess = sqliteTable("cognitive_process", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	summary: text(),
	parentId: integer("parent_id"),
},
(table) => [
	foreignKey(() => ({
			columns: [table.parentId],
			foreignColumns: [table.id],
			name: "cognitive_process_parent_id_cognitive_process_id_fk"
		})),
]);

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

export const biases = sqliteTable("biases", {
	id: integer().primaryKey({ autoIncrement: true }),
	nameJa: text("name_ja"),
	nameEn: text("name_en"),
	definition: text(),
	mechanism: text(),
	severity: integer(),
	codexId: integer("codex_id").references(() => codex.id),
	taskBaseId: integer("task_base_id").references(() => taskBase.id),
	flavorId: integer("flavor_id").references(() => flavors.id),
	slogan: text(),
	thumbnail: text(),
	summary: text(),
	measure: text(),
	decisionStyleScore: integer("decision_style_score"),
	perceptionFocusScore: integer("perception_focus_score"),
	gainLossScore: integer("gain_loss_score"),
	hangeOrientationScore: integer("hange_orientation_score"),
	locusOfCausalityScore: integer("locus_of_causality_score"),
});

export const biasCognitiveProcess = sqliteTable("bias_cognitive_process", {
	id: integer().primaryKey({ autoIncrement: true }),
	description: text(),
	biasId: integer("bias_id").references(() => biases.id),
	cognitiveProcessId: integer("cognitive_process_id").references(() => cognitiveProcess.id),
});

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
	description: text(),
	sortOrder: integer("sort_order"),
});

export const biasSocialDynamics = sqliteTable("bias_social_dynamics", {
	id: integer().primaryKey({ autoIncrement: true }),
	biasId: integer("bias_id").references(() => biases.id),
	socialDynamicsId: integer("social_dynamics_id").references(() => socialDynamics.id),
});

export const methodCognitiveProcess = sqliteTable("method_cognitive_process", {
	id: integer().primaryKey({ autoIncrement: true }),
	methodId: integer("method_id").references(() => methods.id),
	cognitiveProcessId: integer("cognitive_process_id").references(() => cognitiveProcess.id),
	description: text(),
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
	description: text(),
});

