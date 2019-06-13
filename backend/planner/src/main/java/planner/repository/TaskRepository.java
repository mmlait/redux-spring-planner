package planner.repository;

import org.springframework.data.repository.CrudRepository;
import planner.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {
}



