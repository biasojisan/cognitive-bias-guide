import { inArray } from "drizzle-orm";
import { db } from ".";
import { biases } from "./schema";

export async function getBigFourSummary() {
    const targetIds = [1, 3, 2, 4];

    return await db
        .select({
            id: biases.id,
            nameJa: biases.nameJa,
            thumbnail: biases.thumbnail,
            summary: biases.summary,
        })
        .from(biases)
        .where(inArray(biases.id, targetIds))
        .then(res => 
            res.sort((a, b) => targetIds.indexOf(a.id) - targetIds.indexOf(b.id))
        );
}