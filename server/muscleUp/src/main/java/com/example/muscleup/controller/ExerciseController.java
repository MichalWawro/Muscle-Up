package com.example.muscleup.controller;

import com.example.muscleup.model.Exercise;
import com.example.muscleup.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;

    @GetMapping("/exercise")
    @CrossOrigin(origins = {"http://localhost:4200"})
    public Exercise getExercise(@RequestParam(defaultValue = "") String muscle) {
        return exerciseService.getExercise(muscle);
    }

    @GetMapping("/exercises")
    @CrossOrigin(origins = {"http://localhost:4200"})
    public List<Exercise> getExercises(@RequestParam(defaultValue = "") String muscle) {
        return exerciseService.getExercises(muscle);
    }
}
