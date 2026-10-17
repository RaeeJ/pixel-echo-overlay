import { describe, expect, it } from "vitest";
import { courseRules, enrollmentEnabled } from "@/components/site/course-details";

describe("Course requirements", () => {
  it("limits CNA prep eligibility to Florida", () => {
    expect(courseRules.cna.eligibleState).toBe("Florida");
  });
  it("keeps the external NPS CET exam fee at $200", () => {
    expect(courseRules.ekg.externalExamFee).toBe(200);
  });
  it("does not enable enrollment before a destination is supplied", () => {
    expect(enrollmentEnabled).toBe(false);
  });
});