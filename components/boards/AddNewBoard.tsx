// components/boards/CreateBoardButton.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Board } from './Board';
import { useTrelloApi } from '../../hooks/useTrelloApi';

interface Workspace {
  id: string;
  name: string;
}

export const CreateBoardButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');
  const [selectedWorkspace, setSelectedWorkspace] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    { id: '1', name: 'Espace de travail 1' },
    { id: '2', name: 'Espace de travail 2' },
  ]);
  const api = useTrelloApi();

  // Uncomment when API is ready
  // useEffect(() => {
  //   const fetchWorkspaces = async () => {
  //     try {
  //       const response = await api.callTrelloApi('get_workspaces', 'me');
  //       if (response.data) {
  //         setWorkspaces(response.data);
  //       }
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des espaces de travail:', error);
  //     }
  //   };
  //
  //   fetchWorkspaces();
  // }, []);

  const createBoard = async () => {
    if (!boardTitle || !selectedWorkspace) return;

    try {
      // Uncomment when API is ready
      // const response = await api.callTrelloApi('create_board', undefined, {
      //   name: boardTitle,
      //   idOrganization: selectedWorkspace
      // });

      console.log('Création du tableau:', boardTitle, "dans l'espace", selectedWorkspace);
      resetAndClose();
    } catch (error) {
      console.error('Erreur lors de la création du tableau:', error);
    }
  };

  const resetAndClose = () => {
    setBoardTitle('');
    setSelectedWorkspace('');
    setModalVisible(false);
    setShowDropdown(false);
  };

  const selectedWorkspaceName =
    workspaces.find((w) => w.id === selectedWorkspace)?.name || 'Sélectionnez un espace de travail';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Créer un tableau</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={resetAndClose}>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPress={() => setShowDropdown(false)}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Créer un nouveau tableau</Text>

            <Text style={styles.label}>Titre du tableau</Text>
            <TextInput
              style={styles.input}
              value={boardTitle}
              onChangeText={setBoardTitle}
              placeholder="Entrez le titre du tableau"
            />

            <Text style={styles.label}>Espace de travail</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setShowDropdown(!showDropdown)}>
              <Text>{selectedWorkspaceName}</Text>
            </TouchableOpacity>

            {showDropdown && (
              <View style={styles.dropdownList}>
                <ScrollView nestedScrollEnabled style={{ maxHeight: 150 }}>
                  {workspaces.map((workspace) => (
                    <TouchableOpacity
                      key={workspace.id}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setSelectedWorkspace(workspace.id);
                        setShowDropdown(false);
                      }}>
                      <Text>{workspace.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={resetAndClose}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonCreate,
                  (!boardTitle || !selectedWorkspace) && styles.buttonDisabled,
                ]}
                onPress={createBoard}
                disabled={!boardTitle || !selectedWorkspace}>
                <Text style={styles.buttonText}>Créer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0079BF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  dropdownList: {
    position: 'absolute',
    top: '58%',
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    zIndex: 1000,
    maxHeight: 150,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: '#6B778C',
    flex: 1,
    marginRight: 5,
  },
  buttonCreate: {
    flex: 1,
    marginLeft: 5,
  },
  buttonDisabled: {
    backgroundColor: '#0079BF80', // version semi-transparente
  },
});

///// exemple d'implementation (ici dans BoardContainer.tsx )

return (
  <View style={{ flex: 1 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
      <Board
        columns={columns}
        setColumns={setColumns}
        newCardTitle={newCardTitle}
        setNewCardTitle={setNewCardTitle}
        newCardDescription={newCardDescription}
        setNewCardDescription={setNewCardDescription}
        addingToColumn={addingToColumn}
        setAddingToColumn={setAddingToColumn}
        addNewCard={addNewCard}
      />
    </ScrollView>

    <CreateBoardButton />
  </View>
);
