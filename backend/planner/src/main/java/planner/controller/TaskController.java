package planner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import planner.model.Task;
import planner.repository.TaskRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @PostMapping("/tasks")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> createTask(@Valid @RequestBody Task task) {
        try{
            taskRepository.save(task);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().build();
    }

    @GetMapping("/tasks")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Task> getAllTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    @PutMapping("/tasks/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> updateTask(@PathVariable(value = "id") Long taskId, @Valid @RequestBody Task taskDetails) {
        Task task;
        try{
            task = taskRepository.findById(taskId)
                    .orElseThrow(() -> new RuntimeException("Something went wrong."));
            task.setTask(taskDetails.getTask());
            taskRepository.save(task);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/tasks/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> deleteTask(@PathVariable(value = "id") Long taskId) {
        try{
            Task task = taskRepository.findById(taskId)
                    .orElseThrow(() -> new RuntimeException("Something went wrong."));
            taskRepository.delete(task);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().build();
    }
}
