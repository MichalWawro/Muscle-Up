package com.example.muscleup.service;

import com.example.muscleup.model.Exercise;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;


@Service
public class ExerciseService {
    private List<Exercise> exercises = new ArrayList<>();

    @PostConstruct
    public void init() throws IOException {
        InputStream inputStream = new ClassPathResource("ExerciseDataset.csv").getInputStream();
        try (BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
            String line = bufferedReader.readLine();
            while ((line = bufferedReader.readLine()) != null) {
                String[] columns = line.split(",");
                Exercise ex = new Exercise(
                        Integer.parseInt((columns[0].trim())),
                        columns[1].trim(),
                        columns[2].trim(),
                        columns[3].trim(),
                        columns[4].trim()
                );
                exercises.add(ex);
            }
        }
    }

    //Singular exercise for testing;
    public Exercise getExercise(String muscle) {
        if (muscle == null || muscle.isEmpty()) {
            return null;
        }
        List<Exercise> filtered = exercises.stream()
                .filter(e -> e.getMuscle().equalsIgnoreCase(muscle))
                .toList();
        if (filtered.isEmpty()) {
            return null;
        }
        return filtered.get(0);
    }

    public List<Exercise> getExercises(String muscle) {
        if (muscle == null || muscle.isEmpty()) {
            return null;
        }
        List<Exercise> filtered = exercises.stream()
                .filter(e -> e.getMuscle().equalsIgnoreCase(muscle))
                .toList();
        if (filtered.isEmpty()) {
            return null;
        }
        return filtered;
    }
}
