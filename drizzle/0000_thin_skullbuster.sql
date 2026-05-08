-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `theories` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`summary` text,
	`established_year` text
);
--> statement-breakpoint
CREATE TABLE `methods` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`purpose` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `task_base` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `flavors` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `academic_fields` (
	`id` integer PRIMARY KEY,
	`name_ja` text,
	`name_en` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `situations` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `evidence_experiments` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`description` text,
	`year` integer
);
--> statement-breakpoint
CREATE TABLE `leverage` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`summary` text,
	`title` text
);
--> statement-breakpoint
CREATE TABLE `cognitive_process` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`summary` text,
	`parent_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `cognitive_process`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `codex` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`summary` text,
	`parent_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `codex`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `biases` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`name_en` text,
	`definition` text,
	`mechanism` text,
	`severity` integer,
	`codex_id` integer,
	`task_base_id` integer,
	`flavor_id` integer,
	FOREIGN KEY (`codex_id`) REFERENCES `codex`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`task_base_id`) REFERENCES `task_base`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`flavor_id`) REFERENCES `flavors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `bias_cognitive_process` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`description` text,
	`bias_id` integer,
	`cognitive_process_id` integer,
	FOREIGN KEY (`cognitive_process_id`) REFERENCES `cognitive_process`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bias_id`) REFERENCES `biases`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `bias_theory` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`bias_id` integer,
	`theory_id` integer,
	`description` text,
	FOREIGN KEY (`theory_id`) REFERENCES `theories`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bias_id`) REFERENCES `biases`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `theory_academic_field` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`theory_id` integer,
	`academic_field_id` integer,
	FOREIGN KEY (`academic_field_id`) REFERENCES `academic_fields`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`theory_id`) REFERENCES `theories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `bias_method` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`bias_id` integer,
	`method_id` integer,
	`mitigation_strategy` text,
	FOREIGN KEY (`method_id`) REFERENCES `methods`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bias_id`) REFERENCES `biases`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `method_category` (
	`id` integer PRIMARY KEY,
	`name_ja` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `social_dynamics` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name_ja` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `bias_situation` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`bias_id` integer,
	`situation_id` integer,
	`description` text,
	FOREIGN KEY (`situation_id`) REFERENCES `situations`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bias_id`) REFERENCES `biases`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `bias_social_dynamics` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`bias_id` integer,
	`social_dynamics_id` integer,
	FOREIGN KEY (`social_dynamics_id`) REFERENCES `social_dynamics`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bias_id`) REFERENCES `biases`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `method_cognitive_process` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`method_id` integer,
	`cognitive_process_id` integer,
	`description` text,
	FOREIGN KEY (`cognitive_process_id`) REFERENCES `cognitive_process`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`method_id`) REFERENCES `methods`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `method_situation` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`method_id` integer,
	`situation_id` integer,
	`description` text,
	FOREIGN KEY (`situation_id`) REFERENCES `situations`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`method_id`) REFERENCES `methods`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `method_social_dynamics` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`method_id` integer,
	`social_dynamics_id` integer,
	FOREIGN KEY (`social_dynamics_id`) REFERENCES `social_dynamics`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`method_id`) REFERENCES `methods`(`id`) ON UPDATE no action ON DELETE no action
);

*/