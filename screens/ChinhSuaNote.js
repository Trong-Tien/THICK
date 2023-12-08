import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SegmentedButtons, TextInput } from 'react-native-paper';

export default function ChinhSuaNote({ navigation, route }) {
  console.log("id note dang duoc edit:", route.params?.editItem);

  const noteEditInit = {
    ...(route.params?.editItem)
  }

  console.log(noteEditInit)
  const [note, setNote] = useState(noteEditInit);
  const [confirm, setConfirm] = useState(0);



  function handleEditNote() {
    console.log("note handle", note);
    sendEditNote(note, route.params?.editItem.id);
    setNote(noteInit);
    setConfirm(confirm + 1);
  }

  function sendEditNote(noteData, id) {
    fetch(`http://localhost:3000/dbNotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData)
    })
      .then(() => {
        console.log('update successfully')
        console.log(JSON.stringify("note update api:", noteData));
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.titleScreen}>Chỉnh sửa Ghi chú</Text>
      </View>
      <View style={styles.middle}>
        <TextInput
          value={note.title}
          onChangeText={(e) => setNote({ ...note, title: e })}
          keyboardType='default'
          style={styles.textInputTitle}
          placeholder='Title Note'
        ></TextInput>
        <TextInput
          value={note.contentNote}
          onChangeText={(e) => setNote({ ...note, contentNote: e })}
          multiline={true}
          keyboardType='email-address'
          style={styles.textInputContentNote}
          placeholder='Content Note'
        ></TextInput>
        <View style={styles.containerSegment}>
          <Text style={styles.titleSegmentButtons}>Ưu Tiên</Text>
          <SegmentedButtons
            value={note.priority}
            onValueChange={(e) => setNote({ ...note, priority: e })}
            style={styles.segmentButtons}
            buttons={[
              {
                value: 1,
                label: 'Red',

              },
              {
                value: 2,
                label: 'Green',
              },
              {
                value: 3,
                label: 'Blue'
              },
            ]}
          />
        </View>
        <View style={styles.containerSegment}>
          <Text style={styles.titleSegmentButtons}>Nhiệm vụ</Text>
          <SegmentedButtons
            value={note.task}
            onValueChange={(e) => setNote({ ...note, task: e })}
            style={styles.segmentButtons}
            buttons={[
              {
                value: 'Long Term',
                label: 'Long Term',

              },
              {
                value: 'Short Term',
                label: 'Short Term',
              },
              {
                value: 'Done',
                label: 'Done'
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.middle1}>
        <Text style={styles.textPolicy}>Bằng cách tiếp tục, bạn đồng ý với chúng tôi </Text>
        <Pressable onPress={() => { }}>
          {({ pressed }) => (pressed ? <Text style={styles.textPolicyReadClick}>Điều khoản dịch vụ</Text>
            : <Text style={styles.textPolicyRead}>Điều khoản dịch vụ</Text>)}
        </Pressable>
        <Text style={styles.textPolicy}> Và </Text>
        <Pressable onPress={() => { }}>
          {({ pressed }) => (pressed ? <Text style={styles.textPolicyReadClick}>Chính sách bảo mật.</Text>
            : <Text style={styles.textPolicyRead}>Chính sách bảo mật.</Text>)}
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Pressable
          style={({ pressed }) => ([styles.buttonAddNote, {
            backgroundColor: pressed ? '#c4bbf0' : '#6B4EFF',
          }])}

          onPress={() => handleEditNote()}
        >
          <Text style={styles.textbuttonAddNote}>Cập Nhật </Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FADFE3',
    flex: 1,
  },
  top: {
    alignSelf: 'center',
  },
  middle: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  middle1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginTop: 30,
  },
  bottom: {
    flex: 1,
    marginVertical: 20,
  },
  titleScreen: {
    fontFamily: 'sans-serif',
    fontSize: 32,
    color: '#000000',
    fontWeight: '700',
    marginVertical: 20,
  },
  textInputTitle: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 5,
    fontSize: 18,
  },
  textInputContentNote: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 5,
    fontSize: 18,
    height: 200,
  },
  textInputPassword: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 5,
    fontSize: 18,
  },
  buttonAddNote: {
    height: 50,
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  textbuttonAddNote: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    alignSelf: 'center',
  },
  textPolicy: {
    fontFamily: 'sans-serif',
    fontSize: 13,
    color: '#000000',
    fontWeight: '300',
  },
  textPolicyRead: {
    fontFamily: 'sans-serif',
    fontSize: 13,
    color: '#6B4EFF',
    fontWeight: '300',
  },
  textPolicyReadClick: {
    fontFamily: 'sans-serif',
    fontSize: 13,
    color: '#c4bbf0',
    fontWeight: '300',
  },
  segmentButtons: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 10,
  },
  titleSegmentButtons: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    color: '#000000',
    fontWeight: '300',
  },
  containerSegment: {
    marginTop: 10,
  },
})