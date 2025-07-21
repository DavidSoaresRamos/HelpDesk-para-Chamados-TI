package com.yuziio.helpdesk;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "*")
public class TicketController {

    @PostMapping
    public ResponseEntity<String> criarTicket(@RequestBody Ticket ticket) {
        System.out.println("Ticket recebido:");
        System.out.println("Nome: " + ticket.getNome());
        System.out.println("Setor: " + ticket.getSetor());
        System.out.println("Problema: " + ticket.getProblema());

        return ResponseEntity.ok("Ticket recebido com sucesso!");
    }
}