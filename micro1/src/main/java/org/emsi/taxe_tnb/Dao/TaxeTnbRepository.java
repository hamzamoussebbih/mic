package org.emsi.taxe_tnb.Dao;

import org.emsi.taxe_tnb.entities.TaxeTnb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxeTnbRepository extends JpaRepository<TaxeTnb,Integer>{

}
