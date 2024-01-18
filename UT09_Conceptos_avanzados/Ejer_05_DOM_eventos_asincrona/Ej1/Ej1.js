window.onload = function () {
    document.addEventListener("click", () => {
        document.getElementById("element_node").textContent = "Document (ELEMENT_NODE) ---> " + document.ELEMENT_NODE;
        document.getElementById("atribute_node").textContent = "Document (ATRIBUTE_NODE) ---> " + document.ATTRIBUTE_NODE;
        document.getElementById("text_node").textContent = "Document (TEXT_NODE) ---> " + document.TEXT_NODE;
        document.getElementById("cdata_section_node").textContent = "Document (CDATA_SECTION_NODE) ---> " + document.CDATA_SECTION_NODE;
        document.getElementById("entity_reference_node").textContent = "Document (ENTITY_REFERENCE_NODE) ---> " + document.ENTITY_REFERENCE_NODE;
        document.getElementById("entity_node").textContent = "Document (ENTITY_NODE) ---> " + document.ENTITY_NODE;
        document.getElementById("processing_instruction_node").textContent = "Document (PROCESSING_INSTRUCTION_NODE) ---> " + document.PROCESSING_INSTRUCTION_NODE;
        document.getElementById("comment_node").textContent = "Document (COMMENT_NODE) ---> " + document.COMMENT_NODE;
        document.getElementById("document_node").textContent = "Document (DOCUMENT_NODE) ---> " + document.DOCUMENT_NODE;
        document.getElementById("document_type_node").textContent = "Document (DOCUMENT_TYPE_NODE) ---> " + document.DOCUMENT_TYPE_NODE;
        document.getElementById("document_fragment_code").textContent = "Document (DOCUMENT_FRAGMENT_NODE) ---> " + document.DOCUMENT_FRAGMENT_NODE;
        document.getElementById("notation_node").textContent = "Document (NOTATION_NODE) ---> " + document.NOTATION_NODE;
    });
}