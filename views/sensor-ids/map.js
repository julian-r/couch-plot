function(doc) {
  if (doc.datastream_id) {
    emit(doc.datastream_id, null );
  }
};