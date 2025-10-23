package br.com.shipping_service.repositories;

import br.com.shipping_service.entities.Shipping;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ShippingRepository extends MongoRepository<Shipping, ObjectId> {

    List<Shipping> findByPublicIdentifier(String publicIdentifier);

}
