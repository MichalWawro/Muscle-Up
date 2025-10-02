package com.example.muscleup.model;

public class Exercise {
    private Integer id;
    private String name;
    private String repRange;
    private String muscle;
    private String description;

    public Exercise(Integer id, String name, String repRange, String muscle, String description) {
        this.id = id;
        this.name = name;
        this.repRange = repRange;
        this.muscle = muscle;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRepRange() {
        return repRange;
    }

    public void setRepRange(String repRange) {
        this.repRange = repRange;
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}